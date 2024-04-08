package com.beginnner.gharaana.Controller;

import com.beginnner.gharaana.Object.*;
import com.beginnner.gharaana.Service.JwtUtil;
import com.beginnner.gharaana.Service.OrderService;
import com.beginnner.gharaana.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("engineering")
public class NitController {
    @Autowired
    UserService userService;
    @Autowired
    OrderService orderService;
    @Autowired
    JwtUtil jwtUtil;

    @PostMapping(path = "signup")
    public NitSignupResponse Signup(@RequestBody NitSignupRequest nitSignupRequest) {
        return userService.NitSignup(nitSignupRequest);
    }

    @PostMapping(path = "login")
    public NitLoginResponse Login(@RequestBody NitLoginRequest nitLoginRequest) {
        return userService.NitLogin(nitLoginRequest);
    }

    @PostMapping(path = "placeorder")
    public NitOrderResponse Order(@RequestHeader("Authorization") String authorizationHeader, @RequestBody NitOrderRequest nitOrderRequest) {

        String token = authorizationHeader.replace("Bearer ", "");
        Boolean verify = jwtUtil.isTokenValid(token);
        if (verify) {
            return orderService.NitOrder(nitOrderRequest, token);
        }
        return new NitOrderResponse("Some Wrong Info", false);
    }

    @PostMapping(path = "acceptorder")
    public NitAcceptOrderResponse nitAcceptOrder(@RequestHeader("Authorization") String authorizationHeader, @RequestBody NitAcceptOrderRequest nitAcceptOrderRequest) {
        String token = authorizationHeader.replace("Bearer ", "");
        Boolean verify = jwtUtil.isTokenValid(token);
        if (verify) {
            return orderService.NitAccept(nitAcceptOrderRequest, token);
        }
        return new NitAcceptOrderResponse("Wrong info", false);

    }

    @GetMapping(path = "requests")
    public NitCheckOrderResponse checkOrder(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.replace("Bearer ", "");
        Boolean verify = jwtUtil.isTokenValid(token);
        if (verify) {
            return orderService.orderRequest(token);
        }
        return new NitCheckOrderResponse(null, false, null);
    }

    @PostMapping(path = "cancel")
    public NitCancelRequestResponse nitCancelRequest(@RequestHeader("Authorization") String authorizationHeader, @RequestBody NitCancelRequest nitCancelRequest) {
        String token = authorizationHeader.replace("Bearer ", "");
        Boolean verify = jwtUtil.isTokenValid(token);
        if (verify) {
            return orderService.nitCancelRequestOrder(nitCancelRequest,token);
        }
        return new NitCancelRequestResponse("Some wrong info",false);
    }
    @PostMapping(path = "completerequest")
    public CompleteNitOrderResponse completeNitOrder(@RequestHeader("Authorization") String authorizationHeader, @RequestBody CompleteNitOrderRequest completeNitOrderRequest){
        String token = authorizationHeader.replace("Bearer ", "");
        Boolean verify = jwtUtil.isTokenValid(token);
        if (verify) {
            return orderService.completeNitOrder(completeNitOrderRequest,token);
        }
        return new CompleteNitOrderResponse("Some wrong info",false);
    }
   @GetMapping(path="profile")
    public NitProfileResponse nitProfile(@RequestHeader("Authorization") String authorizationHeader){
       String token = authorizationHeader.replace("Bearer ", "");
       Boolean verify = jwtUtil.isTokenValid(token);
       if (verify) {
           return userService.nitProfile(token);
       }
         return new NitProfileResponse(null,false);
   }




}
