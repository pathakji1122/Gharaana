package com.beginnner.gharaana.Object;

import com.beginnner.gharaana.Entity.Student;

public class NitProfileResponse {
    public Student student;
    public Boolean action;

    public NitProfileResponse(Student student, Boolean action) {
        this.student=student;
        this.action=action;
    }
}
