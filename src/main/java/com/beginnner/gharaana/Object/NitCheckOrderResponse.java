package com.beginnner.gharaana.Object;

import com.beginnner.gharaana.Entity.NitCheckOrder;
import com.beginnner.gharaana.Entity.OrderNIT;
import com.beginnner.gharaana.Entity.Student;

import java.util.List;

public class NitCheckOrderResponse{
         public  List<NitCheckOrder>nitCheckOrder;
           public boolean action;


    public NitCheckOrderResponse(List<NitCheckOrder> nitCheckOrder, Boolean action) {
        this.nitCheckOrder=nitCheckOrder;
        this.action=action;

    }


}
