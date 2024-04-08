package com.beginnner.gharaana.Object;

import com.beginnner.gharaana.Entity.OrderNIT;

import java.util.List;

public class BuddyResponse {
    public List<OrderNIT>orderNITList;
    public Boolean action;

    public BuddyResponse(List<OrderNIT> orderNITList, Boolean action) {
        this.orderNITList=orderNITList;
        this.action=action;
    }
}
