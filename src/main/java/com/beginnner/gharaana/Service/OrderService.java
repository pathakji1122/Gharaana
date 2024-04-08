package com.beginnner.gharaana.Service;

import com.beginnner.gharaana.Entity.*;
import com.beginnner.gharaana.Object.*;

import com.beginnner.gharaana.Repo.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import java.util.Random;

import static java.lang.Integer.parseInt;


@org.springframework.stereotype.Service
public class OrderService {

    @Autowired
    OtpRepository otpRepository;
    @Autowired
    NitRepository nitRepository;
    @Autowired
    OrderNitRepository orderNitRepository;
    @Autowired
    UserService userService;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    ExpertRepository expertRepository;



    public String createOrderId(OrderRequest orderRequest) {
        String prefix = "#GHINBN";
        String orderId;
        String randomNumber = generateRandomNumber();

        // Concatenate prefix and random number to form order ID
        orderId = prefix + randomNumber;

        // Check if the order ID already exists in the repository, if so, regenerate the random number
        while (orderRepository.findByOrderId(orderId)!=null) {
            randomNumber = generateRandomNumber();
            orderId = prefix + randomNumber;
        }
        return orderId;
    }

    private String generateRandomNumber() {
        Random random = new Random();
        int randomNumber = random.nextInt(90000000) + 10000000; // Generate random number between 10000000 and 99999999
        return String.valueOf(randomNumber);
    }


    public void saveOrder(OrderRequest orderRequest, String orderId, String token) throws ParseException {
        String email = jwtUtil.extractUserEmail(token);
        Customer customer = customerRepository.findOneByEmail(email);
        OrderStatus orderStatus = OrderStatus.NOT_ACCEPTED;
        Times times = placingOrderTimes(orderRequest);

        Order order = new Order.OrderBuilder(orderId).setOrderStatus(orderStatus).setLocation(customer.location).setPrice(orderRequest.price).setTimes(times).setExpertise(orderRequest.expertise).setEmail(customer.email).setName(customer.name).setPayment(false).build();
        orderRepository.save(order);
    }

    public AcceptOrderResponse acceptOrder(AcceptOrderRequest acceptOrderRequest, String token) {
        Order order = orderRepository.findByOrderId(acceptOrderRequest.orderId);
        if (order.getOrderStatus().equals(OrderStatus.NOT_ACCEPTED)) {
            order.getTimes().orderAcceptedAt = createOrderTime();
            String email = jwtUtil.extractUserEmail(token);

            Expert expert = expertRepository.findOneByEmail(email);
            order.setOrderStatus(OrderStatus.ACCEPTED);
            order.setExpert(expert.email);
            orderRepository.save(order);
            return new AcceptOrderResponse("Order Accepted", order, true);
        } else if (order.getOrderStatus().equals(OrderStatus.ACCEPTED)) {
            return new AcceptOrderResponse("Order Already Accepted", null, false);

        }
        return new AcceptOrderResponse("Order Already Completed", null, false);

    }

    public StartOrderResponse startOrder(StartOrderRequest startOrderRequest, String token) {
        String email = jwtUtil.extractUserEmail(token);
        Expert expert = expertRepository.findOneByEmail(email);
        Boolean verifyAgent = verifyGharaanaAgent(startOrderRequest.orderId, expert);
        if (verifyAgent) {
            Order order = orderRepository.findByOrderId(startOrderRequest.orderId);
            if(order.getOrderStatus()==OrderStatus.CANCELLED){
                return new StartOrderResponse("Order Cancelled by customer",false,null);
            }
            Times times = order.getTimes();
            times.startTime = createOrderTime();
            order.setOrderStatus(OrderStatus.IN_PROGRESS);
            order.setTimes(times);
            orderRepository.save(order);
            Otp otp = new Otp(order.getOrderId(), Util.generateOtp());
            otpRepository.save(otp);
            return new StartOrderResponse("Order Started", true, order);
        }
        return new StartOrderResponse("Agent Mismatch", false, null);

    }

    public CheckOrdersResponse checkOrders(String token) {
        String email = jwtUtil.extractUserEmail(token);
        Expert expert = expertRepository.findOneByEmail(email);
        List<Order> orderList = new ArrayList<>();
        for (int i = 0; i < expert.expertise.size(); i++) {
            List<Order> orders = orderRepository.findByLocationAndExpertiseAndOrderStatus(expert.location, expert.expertise.get(i), OrderStatus.NOT_ACCEPTED);
            orderList.addAll(orders);
        }

        return new CheckOrdersResponse("Current Orders Are", orderList);
    }

    public MyOrderResponse myOrder(String token) {
        String email = jwtUtil.extractUserEmail(token);

        Customer customer = customerRepository.findOneByEmail(email);
        List<Order> orderList = orderRepository.findByEmail(customer.email);
        return new MyOrderResponse(true, "Your Orders Are", orderList);
    }

    public OrderStatusResponse orderStatus(OrderStatusRequest orderStatusRequest, String token) {
        String email = jwtUtil.extractUserEmail(token);
        Customer customer = customerRepository.findOneByEmail(email);
        Order order = orderRepository.findByOrderId(orderStatusRequest.orderId);
        if (order != null) {
            if (order.getEmail().equals(customer.email)) {
                OrderStatusResponse orderStatusresponse = new OrderStatusResponse(true, "Your Gharaana Agent is " + order.getExpert(), order);
                return orderStatusresponse;
            }
            return new OrderStatusResponse(false, "Enter Correct order Id", null);
        }
        return new OrderStatusResponse(false, "No Valid Order ", null);
    }


    public boolean verifyOtp(CompleteOrderRequest completeOrderRequest) {
        Otp checkOtp = otpRepository.findOneByOrderId(completeOrderRequest.orderId);
        if (checkOtp.otp == completeOrderRequest.otp) {
            return true;
        }
        return false;
    }


    public CompleteOrderResponse completeOrder(CompleteOrderRequest completeOrderRequest, String token) {
        String email = jwtUtil.extractUserEmail(token);
        Expert expert = expertRepository.findOneByEmail(email);
        Boolean verifyAgent = verifyGharaanaAgent(completeOrderRequest.orderId, expert);
        if (verifyAgent) {
            Boolean verifyWorkerOtp = verifyOtp(completeOrderRequest);
            if (verifyWorkerOtp) {
                Order order = orderRepository.findByOrderId(completeOrderRequest.orderId);
                Times times = order.getTimes();
                times.completeTime = createOrderTime();
                order.setTimes(times);
                order.setOrderStatus(OrderStatus.COMPLETED);
                expert.orders = expert.orders + 1;
                expertRepository.save(expert);
                orderRepository.save(order);
                return new CompleteOrderResponse("Order Completed", true);
            }
            return new CompleteOrderResponse("Wrong Otp", false);
        }
        return new CompleteOrderResponse("Agent Mismatch", false);

    }

    public GetOtpResponse getOtp(GetOtpRequest getOtpRequest, String token) {
        Otp currentOtp = otpRepository.findOneByOrderId(getOtpRequest.orderId);
        if (currentOtp == null) {
            return new GetOtpResponse(null, "Order id " + getOtpRequest.orderId + " Doesn't exist", false);
        }
        return new GetOtpResponse(currentOtp.otp, "Your Otp is", true);
    }


    public Times placingOrderTimes(OrderRequest orderRequest) throws ParseException {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:dd:MM:yyyy");
        LocalDateTime date = LocalDateTime.now();
        String placedAt = dtf.format(date);

        String placedFor=orderRequest.placedForTime+":"+orderRequest.placedForDate;
        Times times = new Times(placedAt, placedFor, null, null, null);
        return times;
    }


    public String createOrderTime() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:dd:MM:yyyy");
        LocalDateTime date = LocalDateTime.now();
        String orderTimes = dtf.format(date);
        return orderTimes;

    }

    public Boolean verifyGharaanaAgent(String orderId, Expert expert) {
        Order order = orderRepository.findByOrderId(orderId);
        if (order.getExpert().equals(expert.email)) {
            return true;
        }
        return false;
    }

    public OrderResponse placeOrder(OrderRequest orderRequest, String token) throws ParseException {
        try {
            Expertise expertise = orderRequest.expertise;
            if (expertise == null) {
                String response = userService.availableExpertises();
                return new OrderResponse(false, null, response);
            }
            String orderId = createOrderId(orderRequest);
            saveOrder(orderRequest, orderId, token);
            OrderResponse orderresponse = new OrderResponse(true, orderId, "Order Successful");
            return orderresponse;
        } catch (ParseException e) {
            OrderResponse orderresponse = new OrderResponse(false, null, "Enter Time in Format HH-dd/MM/yyyy");
            return orderresponse;
        }

    }

    public CancelOrderResponse cancelOrder(CancelOrderRequest cancelOrderRequest, String token) {
        Order order = orderRepository.findByOrderId(cancelOrderRequest.orderId);
        if (order != null) {
            if (order.getOrderStatus().equals(OrderStatus.CANCELLED)) {
                return new CancelOrderResponse("Order Already Cancelled", false, order);
            }
            if (order.getOrderStatus().equals(OrderStatus.COMPLETED)) {
                return new CancelOrderResponse("Completed Order Cant Be Cancelled", false, order);
            }
            order.setOrderStatus(OrderStatus.CANCELLED);
            orderRepository.save(order);
            return new CancelOrderResponse("Order Cancelled", true, order);
        }

        return new CancelOrderResponse("OrderId Doesnt Exist", false, null);


    }

    public MyOrderResponse myOrderAsExpert(String token) {
        String email = jwtUtil.extractUserEmail(token);
        List<Order> orderList = orderRepository.findByExpert(email);
        return new MyOrderResponse(true, "Orders", orderList);
    }

    public RateOrderResponse rateOrder(RateOrderRequest rateOrderRequest) {

        String orderId = rateOrderRequest.orderId;
        Order order = orderRepository.findByOrderId(orderId);
        if (order.getOrderStatus() == OrderStatus.COMPLETED) {
            return new RateOrderResponse("Thank You", true);


        }
        return new RateOrderResponse("Order is not completed yet", false);
    }
    public String createNitOrderId(NitOrderRequest NitorderRequest) {
        String prefix = "#GHINBN";
        String orderId;
        String randomNumber = generateRandomNumber();

        // Concatenate prefix and random number to form order ID
        orderId = prefix + randomNumber;

        // Check if the order ID already exists in the repository, if so, regenerate the random number
        while (orderNitRepository.findByOrderId(orderId)!=null) {
            randomNumber = generateRandomNumber();
            orderId = prefix + randomNumber;
        }
        return orderId;
    }
    public NitOrderResponse NitOrder(NitOrderRequest nitOrderRequest,String token){
        String phoneNo=jwtUtil.extractNitStudentPhoneNo(token);
        String orderId=createNitOrderId(nitOrderRequest);
        OrderNIT orderNIT=new OrderNIT(nitOrderRequest.orderDetails,nitOrderRequest.orderPoint,nitOrderRequest.type,orderId,nitOrderRequest.storeName,phoneNo,OrderStatus.NOT_ACCEPTED,nitOrderRequest.orderTime);
        orderNitRepository.save(orderNIT);
        return new NitOrderResponse("Order Placed Successfully",true);
    }
    public NitAcceptOrderResponse NitAccept(NitAcceptOrderRequest nitAcceptOrderRequest,String token){

        String phoneNo=jwtUtil.extractNitStudentPhoneNo(token);
        Student buddyA=nitRepository.findOneByPhoneNo(phoneNo);
        OrderNIT order=orderNitRepository.findByOrderId(nitAcceptOrderRequest.orderId);
        if(order.orderStatus!=OrderStatus.NOT_ACCEPTED){
            return new NitAcceptOrderResponse("Request is accepted by somebody ",false);
        }
        order.buddy=buddyA;
        order.orderStatus=OrderStatus.ACCEPTED;
        long otpNew=Util.generateOtp();
        order.otp=otpNew;
        orderNitRepository.save(order);
        return new NitAcceptOrderResponse("Accepted",true);
    }
    public NitCheckOrderResponse orderRequest(String token){
        String phoneNo=jwtUtil.extractNitStudentPhoneNo(token);
        Student student=nitRepository.findOneByPhoneNo(phoneNo);
       List<OrderNIT>orderNITList=orderNitRepository.findByOrderStatus(OrderStatus.NOT_ACCEPTED);
       for(int i =0;i<orderNITList.size();i++){
           if(orderNITList.get(i).phoneNo==phoneNo){
               orderNITList.remove(orderNITList.get(i));
           }
       }
       return new NitCheckOrderResponse(orderNITList,true,student);



    }
    public NitCancelRequestResponse nitCancelRequestOrder(NitCancelRequest nitCancelRequest,String token){
        String phoneNo= jwtUtil.extractNitStudentPhoneNo(token);
        Student student=nitRepository.findOneByPhoneNo(phoneNo);
        OrderNIT orderNIT=orderNitRepository.findByOrderId(nitCancelRequest.orderId);
        if(orderNIT.phoneNo==phoneNo){
            orderNIT.orderStatus=OrderStatus.CANCELLED;
            orderNitRepository.save(orderNIT);
            return new NitCancelRequestResponse("Order Cancelled",true);
        }
        return new NitCancelRequestResponse("Wrong Attempt",false);

    }
    public CompleteNitOrderResponse completeNitOrder(CompleteNitOrderRequest completeNitOrderRequest,String token){

        OrderNIT orderNIT=orderNitRepository.findByOrderId(completeNitOrderRequest.orderId);
        String phoneNo= jwtUtil.extractNitStudentPhoneNo(token);
        if(orderNIT.buddy.phoneNo==phoneNo){
            if(completeNitOrderRequest.otp==orderNIT.otp){
                return new CompleteNitOrderResponse("Order Completed ",true);

            }
            return new CompleteNitOrderResponse("Otp mismatch",false);

        }

        return new CompleteNitOrderResponse("Error Occured",false);
    }
}

