package com.alfabetoapi.controller.response;

import com.alfabetoapi.enums.MedalTypeEnum;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MedalResponse {
    private Long id;
    private String name;
    private MedalTypeEnum type;
    private Long achievingCondition;
    private String image;
}
