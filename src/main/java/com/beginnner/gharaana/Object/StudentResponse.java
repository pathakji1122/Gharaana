package com.beginnner.gharaana.Object;

import com.beginnner.gharaana.Entity.OrderNIT;

import java.util.List;

public class StudentResponse {
    public List<OrderNIT>orderNITList;
    public Boolean action;

    public StudentResponse(List<OrderNIT> orderNITList, Boolean action) {
     this.orderNITList=orderNITList;
     this.action=action;

    }
}
