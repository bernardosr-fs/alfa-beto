package com.alfabetoapi.model;

import com.alfabetoapi.enums.MedalTypeEnum;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Medal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private MedalTypeEnum type;

    private Integer achievingCondition;
    private String image;
}
