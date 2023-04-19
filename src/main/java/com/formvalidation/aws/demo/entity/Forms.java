package com.formvalidation.aws.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Forms {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    private String name;
    private String email;
    private String phonenumber;
    private String dob;
    private String gender;
    private String qualification;
    private String yearofexperience;
    private String dateofjoining;


    public Integer getId() {
        return this.Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhonenumber() {
        return this.phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getDob() {
        return this.dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getQualification() {
        return this.qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getYearofexperience() {
        return this.yearofexperience;
    }

    public void setYearofexperience(String yearofexperience) {
        this.yearofexperience = yearofexperience;
    }

    public String getDateofjoining() {
        return this.dateofjoining;
    }

    public void setDateofjoining(String dateofjoining) {
        this.dateofjoining = dateofjoining;
    }


    public Forms() {
    }

    public Forms(Integer Id, String name, String email, String phonenumber, String dob, String gender, String qualification, String yearofexperience, String dateofjoining) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.dob = dob;
        this.gender = gender;
        this.qualification = qualification;
        this.yearofexperience = yearofexperience;
        this.dateofjoining = dateofjoining;
    }

}

    
