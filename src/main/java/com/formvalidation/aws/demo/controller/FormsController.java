package com.formvalidation.aws.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.formvalidation.aws.demo.entity.Forms;
import com.formvalidation.aws.demo.repository.FormsRepository;

@RestController
public class FormsController {
    @Autowired
    private FormsRepository formsRepository;

    @GetMapping("/get-forms")
    public List<Forms> getdata(){
        return formsRepository.findAll();
    }

    @PostMapping("/post-forms")
    public Forms postdata(@RequestBody Forms form){
        return formsRepository.save(form);
    }
}
