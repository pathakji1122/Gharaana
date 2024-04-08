package com.beginnner.gharaana.Object;

public class NitLoginResponse {
    public String token;
    public String response;
    public Boolean action;
    public  NitLoginResponse(String token,String response,Boolean action) {
        this.token = token;
        this.response=response;
        this.action=action;

    }


}
