package com.example.bokningsapp.model;

import com.example.bokningsapp.enums.BookingStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.sql.Time;


@Entity
@Table(name = "equipment_bookings")
public class EquipmentBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;

    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String reservationNumber;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column
    private String equipBookedImg;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "equipment_id", referencedColumnName = "id")
    private Equipment equipment;
    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate startDate;

    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate endDate;

    @Column
    private BookingStatus bookingStatus;

    @Column
    @JsonFormat(pattern = "HH:mm")
    private LocalTime pickUp;

    @Column
    @JsonFormat(pattern = "HH:mm")
    private LocalTime dropOff;


    public EquipmentBooking(User user, String equipBookedImg, Equipment equipment, LocalDate startDate, LocalDate endDate, BookingStatus bookingStatus, LocalTime pickUp, LocalTime dropOff) {
        this.user = user;
        this.equipBookedImg = equipBookedImg;
        this.equipment = equipment;
        this.startDate = startDate;
        this.endDate = endDate;
        this.bookingStatus = bookingStatus;
        this.pickUp = pickUp;
        this.dropOff = dropOff;
    }

    public EquipmentBooking() {
    }

    public EquipmentBooking(String reservationNumber) {
        this.reservationNumber = reservationNumber;
    }

    public int getBookingId() {
        return bookingId;
    }

    public String getReservationNumber() {
        return reservationNumber;
    }

    public void setReservationNumber(String reservationNumber) {
        this.reservationNumber = reservationNumber;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public BookingStatus getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(BookingStatus bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public LocalTime getPickUp() {
        return pickUp;
    }

    public void setPickUp(LocalTime pickUp) {
        this.pickUp = pickUp;
    }

    public LocalTime getDropOff() {
        return dropOff;
    }

    public void setDropOff(LocalTime dropOff) {
        this.dropOff = dropOff;
    }

    public String getEquipBookedImg() {
        return equipBookedImg;
    }

    public void setEquipBookedImg(String equipBookedImg) {
        this.equipBookedImg = equipBookedImg;
    }

    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }


    public User getUser() {return user;}

    public void setUser(User user) {this.user = user;}

    @Override
    public String toString() {
        return "EquipmentBooking{" +
                "bookingId=" + bookingId +
                ", reservationNumber='" + reservationNumber + '\'' +
                ", user=" + user +
                ", EquipBookedImg='" + equipBookedImg + '\'' +
                ", equipment=" + equipment +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", bookingStatus=" + bookingStatus +
                ", pickUp=" + pickUp +
                ", dropOff=" + dropOff +
                '}';
    }
}
