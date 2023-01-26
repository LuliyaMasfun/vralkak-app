package com.example.bokningsapp.service;

import com.example.bokningsapp.enums.EquipmentStatus;
import com.example.bokningsapp.enums.EquipmentType;
import com.example.bokningsapp.model.Equipment;
import com.example.bokningsapp.model.EquipmentBooking;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EquipmentService {
     Equipment saveEquipment(Equipment equipment);
     void updateEquipmentStatus(int equipmentId, boolean isBooked);
     List<Equipment> findEquipmentByType(EquipmentType equipmentType);
     List<Equipment> findAllByEquipmentStatus(EquipmentStatus equipmentStatus);
     void deleteEquipment(int id);

}
