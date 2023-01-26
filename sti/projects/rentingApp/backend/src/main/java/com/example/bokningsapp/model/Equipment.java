package com.example.bokningsapp.model;

import com.example.bokningsapp.enums.EquipmentStatus;
import com.example.bokningsapp.enums.EquipmentType;
import jakarta.persistence.*;

import java.time.LocalDate;


@Entity
    @Table(name="equipments")
    public class Equipment {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        @Column
        private String equipmentName;

        @Column
        private String equipmentLocation;

        @Column
        private String equipmentImg;

        @Column
        private int maxDaysToRent;

        @Column
        private String equipmentDescription;

        @Column
        private String equipmentBrand;
        @Column
        private EquipmentType equipmentType;
        @Column
        private EquipmentStatus equipmentStatus;
        @Column
        private boolean isAvailable;

        public Equipment(String equipmentName, String equipmentLocation, String equipmentImg, int maxDaysToRent, String equipmentDescription, String equipmentBrand,  EquipmentType equipmentType, EquipmentStatus equipmentStatus, boolean isAvailable) {
            this.equipmentName = equipmentName;
            this.equipmentLocation = equipmentLocation;
            this.equipmentImg = equipmentImg;
            this.maxDaysToRent = maxDaysToRent;
            this.equipmentDescription = equipmentDescription;
            this.equipmentBrand = equipmentBrand;
            this.equipmentType = equipmentType;
            this.equipmentStatus = equipmentStatus;
            this.isAvailable = isAvailable;
        }

        public Equipment() {
        }

        public int getId() {return id;}
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

        public boolean isAvailable(LocalDate startDate, LocalDate endDate) {
            return isAvailable;
        }

        public void setAvailable(boolean available) {
            isAvailable = available;
        }

        @Override
        public String toString() {
            return "Equipment{" +
                    "id=" + id +
                    ", equipmentName='" + equipmentName + '\'' +
                    ", equipmentLocation='" + equipmentLocation + '\'' +
                    ", equipmentImg='" + equipmentImg + '\'' +
                    ", maxDaysToRent=" + maxDaysToRent +
                    ", equipmentDescription='" + equipmentDescription + '\'' +
                    ", equipmentBrand='" + equipmentBrand + '\'' +
                    ", equipmentType='" + equipmentType + '\'' +
                    ", equipmentStatus='" + equipmentStatus + '\'' +
                    '}';
        }
    }


