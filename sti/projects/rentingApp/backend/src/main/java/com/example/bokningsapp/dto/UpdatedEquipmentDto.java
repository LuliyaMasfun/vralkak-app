package com.example.bokningsapp.dto;

import com.example.bokningsapp.enums.EquipmentStatus;
import com.example.bokningsapp.enums.EquipmentType;
import jakarta.persistence.Column;
import org.jetbrains.annotations.NotNull;

public class UpdatedEquipmentDto {
    @NotNull
    private String equipmentName;

    @NotNull
    private String equipmentLocation;

    @NotNull
    private String equipmentImg;

    @NotNull
    private int maxDaysToRent;

    @NotNull
    private String equipmentDescription;
    @NotNull
    private String equipmentBrand;

    @NotNull
    private EquipmentType equipmentType;

    @NotNull
    private EquipmentStatus equipmentStatus;



    public UpdatedEquipmentDto(@NotNull String equipmentName, @NotNull String equipmentLocation, @NotNull String equipmentImg, @NotNull int maxDaysToRent, @NotNull String equipmentDescription, @NotNull String equipmentBrand, @NotNull EquipmentType equipmentType, @NotNull EquipmentStatus equipmentStatus) {
        this.equipmentName = equipmentName;
        this.equipmentLocation = equipmentLocation;
        this.equipmentImg = equipmentImg;
        this.maxDaysToRent = maxDaysToRent;
        this.equipmentDescription = equipmentDescription;
        this.equipmentBrand = equipmentBrand;
        this.equipmentType = equipmentType;
        this.equipmentStatus = equipmentStatus;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public String getEquipmentLocation() {
        return equipmentLocation;
    }

    public void setEquipmentLocation(String equipmentLocation) {
        this.equipmentLocation = equipmentLocation;
    }

    public String getEquipmentImg() {
        return equipmentImg;
    }

    public void setEquipmentImg(String equipmentImg) {
        this.equipmentImg = equipmentImg;
    }

    public int getMaxDaysToRent() {
        return maxDaysToRent;
    }

    public void setMaxDaysToRent(int maxDaysToRent) {
        this.maxDaysToRent = maxDaysToRent;
    }

    public String getEquipmentDescription() {
        return equipmentDescription;
    }

    public void setEquipmentDescription(String equipmentDescription) {
        this.equipmentDescription = equipmentDescription;
    }

    public String getEquipmentBrand() {
        return equipmentBrand;
    }

    public void setEquipmentBrand(String equipmentBrand) {
        this.equipmentBrand = equipmentBrand;
    }

    public EquipmentType getEquipmentType() {
        return equipmentType;
    }

    public void setEquipmentType(EquipmentType equipmentType) {
        this.equipmentType = equipmentType;
    }

    public EquipmentStatus getEquipmentStatus() {
        return equipmentStatus;
    }

    public void setEquipmentStatus(EquipmentStatus equipmentStatus) {
        this.equipmentStatus = equipmentStatus;
    }
}
