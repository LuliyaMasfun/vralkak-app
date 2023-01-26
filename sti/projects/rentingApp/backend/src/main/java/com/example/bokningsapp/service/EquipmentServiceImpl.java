package com.example.bokningsapp.service;

import com.example.bokningsapp.enums.EquipmentStatus;
import com.example.bokningsapp.enums.EquipmentType;
import com.example.bokningsapp.exception.EquipmentNotFoundException;
import com.example.bokningsapp.model.Equipment;
import com.example.bokningsapp.repository.EquipmentRepo;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {
    private final EquipmentRepo equipmentRepo;
    @Autowired
    public EquipmentServiceImpl(EquipmentRepo equipmentRepo) {
        this.equipmentRepo = equipmentRepo;
    }
    @Override
    public Equipment saveEquipment(Equipment equipment) {
        return equipmentRepo.save(equipment);
    }

    @Override
    public void updateEquipmentStatus(int equipmentId, boolean isBooked) {
        Equipment updateEquipment = equipmentRepo.findById(equipmentId).orElse(null);

        if (updateEquipment != null) {
            if (isBooked) {
                updateEquipment.setEquipmentStatus(EquipmentStatus.UNAVAILABLE);
            } else {
                updateEquipment.setEquipmentStatus(EquipmentStatus.AVAILABLE);
            }
            equipmentRepo.save(updateEquipment);
        }
    }
    @Override
    public List<Equipment> findEquipmentByType(EquipmentType equipmentType) {
        return equipmentRepo.findByEquipmentType(equipmentType);
    }

    @Override
    public List<Equipment> findAllByEquipmentStatus(EquipmentStatus equipmentStatus) {
        return equipmentRepo.findAllByEquipmentStatus(equipmentStatus);
    }

    @Transactional
    @Override
    public void deleteEquipment(int id) {
        Equipment equipment = equipmentRepo.findById(id)
                .orElseThrow(() -> new EquipmentNotFoundException("Equipment not found with id " + id));
        equipmentRepo.delete(equipment);
    }

}
