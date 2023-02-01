package com.alfabetoapi.controller.response;

import com.alfabetoapi.enums.CustomizationTypeEnum;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OwnedCustomizationResponse {
    private Long id;
    private String name;
    private CustomizationTypeEnum type;
    private String value;
    private boolean equipped;
    private Long ownedCustomizationId;
}
