package com.example.bokningsapp.model;

import com.example.bokningsapp.enums.AccountStatus;
import com.example.bokningsapp.enums.ERole;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Table
@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String profileImg;

    @Column
    private Long socialSecurityNumber;

    @Column
    private String phoneNumber;

    @Column
    private String address;

    @Column
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime createdDate;

    @Column
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime updatedDate;

    @Column
    private String password;

    @Column
    private LocalDate birthDate;
    @Column
    private AccountStatus accountStatus;
    @Column
    private ERole role;



    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<EquipmentBooking> equipmentBookings;


    public User(String name, String lastName, String email, List<EquipmentBooking> equipmentBookings, String profileImg, Long socialSecurityNumber,
                String phoneNumber,String adress,  LocalDateTime createdDate, LocalDateTime updatedDate, String password, LocalDate birthDate) {
        this.firstName = name;
        this.lastName = lastName;
        this.email = email;
        this.equipmentBookings = equipmentBookings;
        this.profileImg =  profileImg;
        this.socialSecurityNumber = socialSecurityNumber;
        this.phoneNumber = phoneNumber;
        this.address = adress;
        this.createdDate = createdDate;
        this.updatedDate =updatedDate;
        this.password = password;
        this.birthDate = birthDate;

    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<EquipmentBooking> getEquipmentBookings() {
        return equipmentBookings;
    }

    public void setEquipmentBookings(List<EquipmentBooking> equipmentBookings) {
        this.equipmentBookings = equipmentBookings;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public Long getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public void setSocialSecurityNumber(Long socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(LocalDateTime updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public AccountStatus getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
    }

    public ERole getRole() {
        return role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", profileImg='" + profileImg + '\'' +
                ", socialSecurityNumber=" + socialSecurityNumber +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", adress='" + address + '\'' +
                ", createdDate=" + createdDate +
                ", updatedDate=" + updatedDate +
                ", password='" + password + '\'' +
                ", birthDate=" + birthDate +
                ", accountStatus=" + accountStatus +
                ", equipmentBookings=" + equipmentBookings +
                '}';
    }
}
