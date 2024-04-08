package com.beginnner.gharaana.Repo;

import com.beginnner.gharaana.Entity.OrderNIT;
import com.beginnner.gharaana.Entity.OrderStatus;
import com.beginnner.gharaana.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderNitRepository extends MongoRepository<OrderNIT,String> {
    OrderNIT findByOrderId(String orderId);
    OrderNIT save(OrderNIT orderNIT);
    List<OrderNIT> findByOrderStatus(OrderStatus orderStatus);
    List<OrderNIT> findByBuddy(Student student);
    List<OrderNIT>findByPhoneNo(String phoneNo);


}
