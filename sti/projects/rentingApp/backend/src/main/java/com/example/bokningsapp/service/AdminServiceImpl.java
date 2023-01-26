package com.example.bokningsapp.service;

import com.example.bokningsapp.dto.UpdatedEquipBookingDto;
import com.example.bokningsapp.dto.UpdatedEquipmentDto;
import com.example.bokningsapp.exception.BookingNotFoundException;
import com.example.bokningsapp.exception.EquipmentNotFoundException;
import com.example.bokningsapp.model.Equipment;
import com.example.bokningsapp.model.EquipmentBooking;
import com.example.bokningsapp.model.User;
import com.example.bokningsapp.repository.EquipBookingRepo;
import com.example.bokningsapp.repository.EquipmentRepo;
import com.example.bokningsapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{

    private final EquipBookingRepo equipBookingRepo;
    private final EquipmentRepo equipmentRepo;
    private final UserRepository userRepository;

    @Autowired
    public AdminServiceImpl(EquipBookingRepo equipBookingRepo, EquipmentRepo equipmentRepo, UserRepository userRepository) {
        this.equipBookingRepo = equipBookingRepo;
        this.equipmentRepo = equipmentRepo;
        this.userRepository = userRepository;
    }

    @Override
    public EquipmentBooking handleBookingRequest(int bookingId, UpdatedEquipBookingDto equipUpdatedBookingDto, UpdatedEquipmentDto updatedEquipmentDto) {
        //check if the booking exists
        EquipmentBooking equipmentBooking = equipBookingRepo.findById(bookingId)
                .orElseThrow(() -> new BookingNotFoundException("Booking not found"));

        //check if the user is Admin and authorized to update........

        //check if the equipment is available for the new dates
        Equipment equipment = equipmentRepo.findById(equipmentBooking.getEquipment().getId())
                .orElseThrow(() -> new EquipmentNotFoundException("Equipment not found"));

        equipmentBooking.setBookingStatus(equipUpdatedBookingDto.getBookingStatus());

        EquipmentBooking updatedBooking = equipBookingRepo.save(equipmentBooking);
        //update the equipment status
        equipment.setEquipmentStatus(updatedEquipmentDto.getEquipmentStatus());
        equipmentRepo.save(equipment);

        return updatedBooking;
    }

}
