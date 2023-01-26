package com.example.bokningsapp.repository;

import com.example.bokningsapp.enums.BookingStatus;
import com.example.bokningsapp.enums.EquipmentType;
import com.example.bokningsapp.model.EquipmentBooking;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipBookingRepo extends JpaRepository <EquipmentBooking, Integer>{

    List<EquipmentBooking> findAllByBookingStatus(BookingStatus status);
    List<EquipmentBooking>findAll();

    @Query
            ("SELECT b FROM EquipmentBooking b WHERE b.equipment.id = :equipmentId and b.bookingStatus = :bookingStatus")
    List<EquipmentBooking> findAllByEquipmentIdAndBookingStatus(@Param("equipmentId") int equipmentId, @Param("bookingStatus") BookingStatus bookingStatus);

   // List<EquipmentBooking> findAllByUserIdAndEquipmentType(Long userId, EquipmentType equipmentType);

}
