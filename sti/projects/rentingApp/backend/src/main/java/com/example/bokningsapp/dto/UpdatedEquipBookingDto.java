package com.example.bokningsapp.dto;

import com.example.bokningsapp.enums.BookingStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.jetbrains.annotations.NotNull;

import java.time.LocalDate;
import java.time.LocalTime;

public class UpdatedEquipBookingDto {

    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate startDate;

    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate endDate;

    @NotNull
    @JsonFormat(pattern = "HH:mm")
    private LocalTime pickUp;

    @NotNull
    @JsonFormat(pattern = "HH:mm")
    private LocalTime dropOff;

    @NotNull
    private BookingStatus bookingStatus;


    public UpdatedEquipBookingDto(@NotNull LocalDate startDate, @NotNull LocalDate endDate, @NotNull LocalTime pickUp, @NotNull LocalTime dropOff, @NotNull BookingStatus bookingStatus) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.pickUp = pickUp;
        this.dropOff = dropOff;
        this.bookingStatus = bookingStatus;
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

    public BookingStatus getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(BookingStatus bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    @Override
    public String toString() {
        return "UpdatedEquipmentBookingDto{" +
                "startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
