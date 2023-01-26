package com.example.bokningsapp.controller;

import com.example.bokningsapp.dto.UpdatedEquipBookingDto;
import com.example.bokningsapp.dto.UpdatedEquipmentDto;
import com.example.bokningsapp.enums.BookingStatus;
import com.example.bokningsapp.exception.BookingNotFoundException;
import com.example.bokningsapp.exception.EquipmentNotAvailableException;
import com.example.bokningsapp.model.EquipmentBooking;
import com.example.bokningsapp.repository.EquipBookingRepo;
import com.example.bokningsapp.service.AdminService;
import com.example.bokningsapp.service.EquipBookingService;
import com.example.bokningsapp.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {

    private final AdminService adminService;
    private final EquipBookingService equipBookingService;


    @Autowired
    public AdminController(EquipBookingService equipBookingService, AdminService adminService) {
        this.equipBookingService = equipBookingService;
        this.adminService = adminService;
    }

    @PutMapping("/handleBooking/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<EquipmentBooking> handleBookingRequest(@PathVariable int id, @RequestBody UpdatedEquipBookingDto updatedEquipmentBookingDto, UpdatedEquipmentDto updatedEquipmentDto){
        try {
            adminService.handleBookingRequest(id, updatedEquipmentBookingDto, updatedEquipmentDto);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (BookingNotFoundException e) {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
        catch (EquipmentNotAvailableException ex) {
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/getBookingsByStatus")
    public ResponseEntity<List<EquipmentBooking>> getAllBookings( @RequestParam(required = false) BookingStatus status) {
        List<EquipmentBooking> bookings;
        if(status == null) {
            bookings = equipBookingService.findAll();
        } else {
            bookings = equipBookingService.findAllByStatus(status);
        }
        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}
