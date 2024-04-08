package com.beginnner.gharaana.Object;

import com.beginnner.gharaana.Entity.OrderNIT;
import com.beginnner.gharaana.Entity.Student;

import java.util.List;

public class NitCheckOrderResponse{
               public List<OrderNIT> requests;
           public boolean action;
           public Student student;

    public NitCheckOrderResponse(List<OrderNIT> requests, Boolean action, Student student) {
        this.requests=requests;
        this.action=action;
        this.student=student;
    }

    public NitCheckOrderResponse(String some_wrong_info, boolean action) {
    }
}
