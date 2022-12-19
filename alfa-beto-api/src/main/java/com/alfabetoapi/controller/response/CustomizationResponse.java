package com.alfabetoapi.controller.response;

import com.alfabetoapi.enums.CustomizationTypeEnum;
import lombok.Builder;
import lombok.Data;

import java.math.BigInteger;

@Data
@Builder
public class CustomizationResponse {
    private Long id;
    private String name;
    private CustomizationTypeEnum type;
    private BigInteger price;
    private String value;
}
