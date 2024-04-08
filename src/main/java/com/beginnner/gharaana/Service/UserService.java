package com.beginnner.gharaana.Service;

import com.beginnner.gharaana.Entity.*;
import com.beginnner.gharaana.Object.*;

import com.beginnner.gharaana.Repo.*;
import com.beginnner.gharaana.Validation.*;


import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

import static java.lang.Integer.parseInt;
import static java.lang.String.join;
import static java.lang.String.valueOf;

@org.springframework.stereotype.Service
public class UserService {
   @Autowired
   NitRepository nitRepository;
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
   ExpertRepository expertRepository;



    public LoginResponce loginCustomerVerify(LoginRequest loginRequest) {
        String password = loginRequest.password;
        String email = loginRequest.email;
        Customer customer = customerRepository.findOneByEmail(email);
        if (customer == null) {
            return new LoginResponce(null, false, "User Doesn't Exists",false);
        }
        if (customer.password.equals(password)) {
            String token = jwtUtil.generateToken(email);
            return new LoginResponce(token, false, "Login Successful",true);
        } else {
            return new LoginResponce(null, false, "Wrong Password",false);
        }
    }

    public LoginResponce loginExpertVerify(LoginRequest loginRequest) {
        String password = loginRequest.password;
        String email = loginRequest.email;
       Expert expert = expertRepository.findOneByEmail(email);
        if (expert == null) {
            return new LoginResponce(null, false, "User Doesn't Exists",false);
        }
        if (expert.password.equals(password)) {
            String token = jwtUtil.generateToken(email);
            return new LoginResponce(token, true, "Login Successful",true);
        } else {
            return new LoginResponce(null, false, "Wrong Password",false);
        }
    }

    public SignUpResponse registerCustomer(CustomerSignUpRequest customerSignupRequest) throws IOException, InterruptedException {
        String validCustomerData = SignupRequestValidator.validateCustomerRequest(customerSignupRequest);
        if(customerSignupRequest.customerName == ""){
            return new SignUpResponse("Please Enter Valid name", false);
        }
        else if (validCustomerData != null) {
            return new SignUpResponse(validCustomerData, false);
        }
        Location locationVerify = Location.getLocationFromCode(valueOf(customerSignupRequest.location));
        if (locationVerify != null) {
            Customer customer = customerRepository.findOneByEmail(customerSignupRequest.email);
            if (customer == null) {
                Customer newCustomer = new Customer(customerSignupRequest.customerName, customerSignupRequest.email, customerSignupRequest.password, customerSignupRequest.phoneNo,customerSignupRequest.location,ServicePack.BASIC);
                saveCustomer(newCustomer);
                String response = "Welcome To Gharaana " + customerSignupRequest.customerName;

                return new SignUpResponse(response, true);
            }
            return new SignUpResponse("Customer Exists", false);
        }
        String response = getCurrentLocations();
        return new SignUpResponse("We Are Only Available in " + response, false);
    }

    public void saveCustomer(Customer customer) {
        customerRepository.save(customer);

    }

    public SignUpResponse registerExpert(ExpertSignupRequest expertSignupRequest) throws IOException, InterruptedException {
        String validWorkerData = SignupRequestValidator.validateExpertRequest(expertSignupRequest);
        if(expertSignupRequest.expertName == ""){
            return new SignUpResponse("Please Enter Valid name", false);
        }
         else if (validWorkerData != null) {
            return new SignUpResponse(validWorkerData, false);
        }
        Location locationVerify = Location.getLocationFromCode(valueOf(expertSignupRequest.location));
        if (locationVerify != null) {
            Expert expert =expertRepository.findOneByEmail(expertSignupRequest.email);
            if (expert == null) {
                Expert newExpert = new Expert(expertSignupRequest.expertName, expertSignupRequest.email, expertSignupRequest.password, expertSignupRequest.phoneNo, expertSignupRequest.location,expertSignupRequest.expertise,0,0.0);
                saveExpert(newExpert);

                String response = "Welcome to Gharaana " + expertSignupRequest.expertName;
                return new SignUpResponse(response, true);
            }

            return new SignUpResponse("Worker Exists", false);

        }
        String response = getCurrentLocations();
        return new SignUpResponse(response, false);
    }

    public void saveExpert(Expert expert) {
        expertRepository.save(expert);
    }

    public boolean isExpert(String email) {
        Expert expert = expertRepository.findOneByEmail(email);
        if (expert != null) {
            return true;
        } else {
            return false;
        }
    }


    public String getCurrentLocations() {
        String locations = "";
        for (Location locate : Location.values()) {
            locations = locations + " " + locate.toString();
        }
        return locations;
    }

    public String availableExpertises() {
        String expertise = "";
        for (Expertise expertises : Expertise.values()) {
            expertise = expertise + " " + expertises.toString();
        }
        return "We Are Providing Now" + expertise;
    }


    public Customer getCustomerByToken(String token) {
       String email= jwtUtil.extractUserEmail(token);
        Customer customer = customerRepository.findOneByEmail(email);
        return customer;
    }

    public Expert getExpertByToken(String token) {
        String email= jwtUtil.extractUserEmail(token);
        Expert expert = expertRepository.findOneByEmail(email);
        return expert;
    }

    public DeleteCustomerResponse deleteCustomer(String email) {
        Customer customer = customerRepository.findOneByEmail(email);
        if (customer != null) {
            customerRepository.deleteByEmail(email);
            List<Order>orderList=orderRepository.findByEmail(email);
            for(int i = 0;i<orderList.size();i++){
                orderRepository.deleteByOrderId(orderList.get(i).getOrderId());

            }
            return new DeleteCustomerResponse(true, "Customer Deleted");
        }
        return new DeleteCustomerResponse(false, "Customer Doesn't Exists");

    }
    public UpgradeAccountResponse upgradeAccount(UpgradeAccountRequest upgradeAccountRequest, String token) throws IOException, InterruptedException {
        String email= jwtUtil.extractUserEmail(token);
        Customer customer=customerRepository.findOneByEmail(email);

        if(customer.servicePack.equals(ServicePack.BASIC)){
                customer.servicePack=ServicePack.PREMIUM;
                customerRepository.save(customer);
                return new UpgradeAccountResponse("You are Premium Customer Now",true,ServicePack.PREMIUM);
            }

        return new UpgradeAccountResponse("You Are Already Premium Customer",true,ServicePack.PREMIUM);
    }
    public Boolean servicePack(String token){
        String email=jwtUtil.extractUserEmail(token);
        Customer customer=customerRepository.findOneByEmail(email);
        if(customer.servicePack==ServicePack.BASIC){
            return false;
        }
        return true;
    }
    public RatingResponse rating(String token,RatingRequest ratingRequest){
        String email=jwtUtil.extractUserEmail(token);
        Order order=orderRepository.findByOrderId(ratingRequest.orderId);
        if(email==order.getEmail()){
            Expert expert=expertRepository.findOneByEmail(order.getExpert());
            Double rate=(((expert.rating)*expert.orders)+ ratingRequest.ratingPoint)/(expert.orders+1);
            expert.rating=rate;
            expertRepository.save(expert);
            return new RatingResponse("Thank You",true);
        }
        return new RatingResponse("Error",false);




    }
    public CustomerProfileResponse customerView(String token){
        String email= jwtUtil.extractUserEmail(token);
        Customer customer=customerRepository.findOneByEmail(email);
        return new CustomerProfileResponse(true,customer,"Response");

    }
    public ExpertProfileResponse expertView(String token){
        String email= jwtUtil.extractUserEmail(token);
        Expert expert=expertRepository.findOneByEmail(email);
        return new ExpertProfileResponse(true,expert,"Response");
    }
   public NitSignupResponse NitSignup(NitSignupRequest nitSignupRequest){
        if(nitSignupRequest.name==""){
            return new NitSignupResponse("Please input your name",false);

        }
      else if(nitSignupRequest.phoneNo==""){
          return new NitSignupResponse("Please input your phoneno",false);

       }
       else if(nitSignupRequest.branch==""){
           return new NitSignupResponse("Please input your branch",false);

       }
       else if (nitSignupRequest.year == "") {
           return new NitSignupResponse("Please input your year",false);

       }
      else if(nitSignupRequest.password==""){
          return new NitSignupResponse("Please input your password",false);

       }
       else if(nitSignupRequest.enrollmentNo==""){
           return new NitSignupResponse("Please input your enrollmentNo",false);

       }
       else if(nitSignupRequest.hostel==""){
           return new NitSignupResponse("Please enter your hostel",false);
       }
        Student studentBranch=nitRepository.findOneByEnrollmentNo(nitSignupRequest.enrollmentNo.toUpperCase());
       Student student=nitRepository.findOneByPhoneNo(nitSignupRequest.phoneNo);
        if(student!=null||studentBranch!=null){
            return new NitSignupResponse("Account Exists",false);
        }
        String response=SignupRequestValidator.nitSignupCheck(nitSignupRequest);
        if(response==null) {
            Student studentNow = new Student(nitSignupRequest.phoneNo, nitSignupRequest.name, nitSignupRequest.year, nitSignupRequest.enrollmentNo.toUpperCase(),nitSignupRequest.password, nitSignupRequest.hostel,nitSignupRequest.branch);
            nitRepository.save(studentNow);
            return new NitSignupResponse("Account Created ,Enjoy your stay at Gharaana",true);
        }
        return new NitSignupResponse(response,false);

    }
    public NitLoginResponse NitLogin (NitLoginRequest nitLoginRequest){
        Student student = nitRepository.findOneByPhoneNo(nitLoginRequest.phoneNo);
        if(student.password.equals(nitLoginRequest.password)){
            String token = jwtUtil.generateNitStudentToken(nitLoginRequest.phoneNo);
            return new NitLoginResponse(token,"Login Done",true);
        }
            return new NitLoginResponse(null,"Wrong Password",false);
    }
    public NitProfileResponse nitProfile(String token){
        String phoneNo=jwtUtil.extractNitStudentPhoneNo(token);
        Student student=nitRepository.findOneByPhoneNo(phoneNo);
        return new NitProfileResponse(student,true);
    }






}

