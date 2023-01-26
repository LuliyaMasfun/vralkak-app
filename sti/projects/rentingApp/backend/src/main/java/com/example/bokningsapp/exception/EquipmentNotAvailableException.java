package com.example.bokningsapp.exception;

public class EquipmentNotAvailableException  extends RuntimeException{
    public EquipmentNotAvailableException(String message) {
        super(message);
    }
}
