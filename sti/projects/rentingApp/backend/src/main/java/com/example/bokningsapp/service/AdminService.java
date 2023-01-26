package com.example.bokningsapp.service;

import com.example.bokningsapp.dto.UpdatedEquipBookingDto;
import com.example.bokningsapp.dto.UpdatedEquipmentDto;
import com.example.bokningsapp.model.EquipmentBooking;
import com.example.bokningsapp.model.User;
import org.springframework.stereotype.Service;

@Service
public interface AdminService {
    public EquipmentBooking handleBookingRequest(int bookingId, UpdatedEquipBookingDto equipUpdatedBookingDto, UpdatedEquipmentDto updatedEquipmentDto);
}
