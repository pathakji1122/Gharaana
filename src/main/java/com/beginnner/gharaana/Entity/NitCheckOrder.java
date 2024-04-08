package com.beginnner.gharaana.Entity;

import java.util.List;

public class NitCheckOrder {
    public OrderNIT orderNIT;
    public Student student;

    public NitCheckOrder( OrderNIT orderNIT, Student student) {
        this.orderNIT=orderNIT;
        this.student=student;
    }
}
