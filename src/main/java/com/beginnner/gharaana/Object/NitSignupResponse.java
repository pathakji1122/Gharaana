package com.beginnner.gharaana.Object;

import com.beginnner.gharaana.Entity.Student;

public class NitSignupResponse {

    public String response;
    public Boolean action;

    public NitSignupResponse(String response, Boolean action) {
        this.response=response;
        this.action=action;
    }
}
