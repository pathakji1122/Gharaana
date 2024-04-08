package com.beginnner.gharaana.Repo;

import com.beginnner.gharaana.Entity.Expert;
import com.beginnner.gharaana.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NitRepository extends MongoRepository<Student,String> {
    Student save(Student student);

    Student findOneByEnrollmentNo(String enrollmentNo);

    Student findOneByPhoneNo(String phoneNo);

}


