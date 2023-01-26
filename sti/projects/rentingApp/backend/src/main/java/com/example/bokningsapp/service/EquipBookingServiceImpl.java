package com.example.bokningsapp.service;

import com.example.bokningsapp.dto.EquipBookingDto;
import com.example.bokningsapp.dto.UpdatedEquipBookingDto;
import com.example.bokningsapp.enums.BookingStatus;
import com.example.bokningsapp.enums.EquipmentStatus;
import com.example.bokningsapp.enums.EquipmentType;
import com.example.bokningsapp.exception.*;
import com.example.bokningsapp.model.Equipment;
import com.example.bokningsapp.model.EquipmentBooking;
import com.example.bokningsapp.model.User;
import com.example.bokningsapp.repository.EquipBookingRepo;
import com.example.bokningsapp.repository.EquipmentRepo;
import com.example.bokningsapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDate;
import java.util.List;


@Service
public class EquipBookingServiceImpl implements EquipBookingService {

  private final EquipBookingRepo equipBookingRepo;
  private final EquipmentRepo equipmentRepo;
  private final UserRepository userRepository;

  @Autowired
    public EquipBookingServiceImpl(EquipBookingRepo equipBookingRepo, EquipmentRepo equipmentRepo, UserRepository userRepository) {
        this.equipBookingRepo = equipBookingRepo;
        this.equipmentRepo = equipmentRepo;
        this.userRepository = userRepository;
    }

    @Override
    public EquipmentBooking save(EquipmentBooking equipmentBooking) {
        return equipBookingRepo.save(equipmentBooking);
    }

    @Override
    public List<EquipmentBooking> findAllByStatus(BookingStatus status){
        return equipBookingRepo.findAllByBookingStatus(status);
    }

    @Override
    public List<EquipmentBooking> findAll() {
        return equipBookingRepo.findAll();
    }


    @Override
    public void updateBooking(int bookingId, UpdatedEquipBookingDto updatedEquipmentBookingDto, User user) {
        //check if the booking exists
        EquipmentBooking equipmentBooking = equipBookingRepo.findById(bookingId)
                .orElseThrow(() -> new BookingNotFoundException("Booking not found"));

        //check if the booking belongs to the user
        if (!equipmentBooking.getUser().getId().equals(user.getId())) {
            throw new UnauthorizedUserException("You are not authorized to update this booking");
        }

        //check if the equipment is available for the new dates
        Equipment equipment = equipmentRepo.findById(equipmentBooking.getEquipment().getId())
                .orElseThrow(() -> new EquipmentNotFoundException("Equipment not found"));
        if (!equipment.isAvailable(updatedEquipmentBookingDto.getStartDate(), updatedEquipmentBookingDto.getEndDate())) {
            throw new EquipmentNotAvailableException("The equipment is not available for the new dates");
        }
        //update the booking
        equipmentBooking.setStartDate(updatedEquipmentBookingDto.getStartDate());
        equipmentBooking.setEndDate(updatedEquipmentBookingDto.getEndDate());
        equipmentBooking.setPickUp(updatedEquipmentBookingDto.getPickUp());
        equipmentBooking.setDropOff(updatedEquipmentBookingDto.getDropOff());

        equipBookingRepo.save(equipmentBooking);
        //update the equipment status
        equipment.setEquipmentStatus(EquipmentStatus.UNAVAILABLE);
        equipmentRepo.save(equipment);
    }

    @Override
    @Transactional
    public EquipmentBooking createBooking(EquipBookingDto equipBookingDTO) {
        User user = userRepository.findById(equipBookingDTO.getUser().getId())
                .orElseThrow(() -> new UserNotFoundException("User not found with id " + equipBookingDTO.getUser().getId()));
        Equipment equipment = equipmentRepo.findById(equipBookingDTO.getEquipment().getId())
                .orElseThrow(() -> new EquipmentNotFoundException("Equipment not found with id " + equipBookingDTO.getEquipment().getId()));
        if (equipment.getEquipmentStatus() != EquipmentStatus.AVAILABLE) {
            throw new EquipmentNotAvailableException("Equipment is not available for booking");
        }
        LocalDate startDate = equipBookingDTO.getStartDate();
        LocalDate endDate =  equipBookingDTO.getEndDate();
        Duration duration = Duration.between(startDate,endDate);
        long days = duration.toDays();
        if (days > 2) {
            throw new IllegalArgumentException("Booking can't be more than 2 days");
        }
        if (isNotAvailable(startDate,endDate, equipment.getId())) {
            throw new IllegalArgumentException("Equipment is not available for booking");
        }
        EquipmentBooking equipmentBooking = new EquipmentBooking();
        equipmentBooking.setUser(user);
        equipmentBooking.setEquipment(equipment);
        equipmentBooking.setStartDate(startDate);
        equipmentBooking.setEndDate(endDate);
        equipmentBooking.setBookingStatus(BookingStatus.PENDING);
        equipmentBooking.setPickUp(equipBookingDTO.getPickUp()); //LocalTime.parse
        equipmentBooking.setDropOff(equipBookingDTO.getDropOff());
        equipBookingRepo.save(equipmentBooking);
        equipment.setEquipmentStatus(EquipmentStatus.UNAVAILABLE);
        equipmentRepo.save(equipment);
        return equipmentBooking;
    }


    public boolean isNotAvailable(LocalDate startDate, LocalDate endDate, int equipmentId) {
        // check if equipment is available for the given start and end date
        List<EquipmentBooking> bookings = equipBookingRepo.findAllByEquipmentIdAndBookingStatus(equipmentId, BookingStatus.APPROVED);
        for (EquipmentBooking equipmentBooking : bookings) {
            if (!(startDate.isAfter(equipmentBooking.getEndDate()) || endDate.isBefore(equipmentBooking.getStartDate()))) {
                return true;
            }
        }
        return false;
    }

   /* @Override
    public List<EquipmentBooking> findAllByUserIdAndEquipmentType(Long userId, EquipmentType equipmentType) {
        return equipBookingRepo.findAllByUserIdAndEquipmentType(userId, equipmentType);
    } */
}
