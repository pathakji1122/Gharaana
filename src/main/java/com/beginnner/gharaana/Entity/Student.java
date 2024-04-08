package com.beginnner.gharaana.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("nit")
public class Student {
    @Id
    public String phoneNo;
    public String name;
    public String year;
    public String hostel;
    public String password;
    public String enrollmentNo;
    public String branch;

    public int coin;
    public Student(String phoneNo,String name,String year,String hostel,String password,String enrollmentNo,String branch,int coin){
        this.phoneNo=phoneNo;
        this.name=name;
        this.year=year;
        this.hostel=hostel;
        this.password=password;
        this.enrollmentNo=enrollmentNo;
        this.branch=branch;
        this.coin=coin;
    }
}

