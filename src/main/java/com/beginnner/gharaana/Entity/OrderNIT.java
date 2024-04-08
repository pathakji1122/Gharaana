package com.beginnner.gharaana.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("ordernit")
public class OrderNIT {
    @Id
    public String orderId;

    public String phoneNo;
    public String orderPoint;
    public String type;
    public Student buddy;
    public String  storeName;
    public OrderStatus orderStatus;
    public String orderTime;
    public  String orderDetails;
    public long otp;


    public OrderNIT(String orderDetails, String orderPoint, String type,String orderId, String storeName, String phoneNo,OrderStatus orderStatus,String orderTime) {
        this.orderDetails=orderDetails;
        this.orderPoint=orderPoint;
        this.type=type;
        this.storeName=storeName;
        this.phoneNo=phoneNo;
        this.orderStatus=orderStatus;
        this.orderId=orderId;
        this.orderTime=orderTime;
    }
}
