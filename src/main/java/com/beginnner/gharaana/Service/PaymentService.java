package com.beginnner.gharaana.Service;

import com.beginnner.gharaana.Entity.Order;
import com.beginnner.gharaana.Object.CreatePaymentRequest;
import com.beginnner.gharaana.Object.CreatePaymentResponse;
import com.beginnner.gharaana.Repo.OrderRepository;
import com.razorpay.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;
    @Autowired
    OrderRepository orderRepository;

    public CreatePaymentResponse createPayment(CreatePaymentRequest createPaymentRequest) throws RazorpayException {
        RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
        JSONObject orderRequest = new JSONObject();
        Order order=orderRepository.findByOrderId(createPaymentRequest.orderId);
        orderRequest.put("amount", order.getPrice() * 100);
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", order.getOrderId());
        orderRequest.put("payment_capture", 1);

        try {

            com.razorpay.Order razorpayOrder = razorpay.orders.create(orderRequest);
            order.setPaymentId(razorpayOrder.get("id"));
            com.razorpay.Order razorPayOrder= razorpay.orders.create(orderRequest);
            orderRepository.save(order);
            return new CreatePaymentResponse(razorpayOrder.get("id"));

        } catch (RazorpayException e) {

            throw e;
        }
    }
    public Boolean completePayment(String paymentId){
        Order order=orderRepository.findByPaymentId(paymentId);
        order.setPayment(true);
        orderRepository.save(order);
        return true;
    }

}
