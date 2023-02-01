package com.alfabetoapi.model;

import com.alfabetoapi.model.enums.CustomizationTypeEnum;
import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Customization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private CustomizationTypeEnum type;

    private BigInteger price;
    private String customValue;
}
