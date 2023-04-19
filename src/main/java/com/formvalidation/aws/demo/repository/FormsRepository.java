package com.formvalidation.aws.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.formvalidation.aws.demo.entity.Forms;

@Repository
public interface FormsRepository extends JpaRepository<Forms,Integer> {
     
}
