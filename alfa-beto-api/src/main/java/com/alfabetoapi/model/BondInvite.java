package com.alfabetoapi.model;

import com.alfabetoapi.model.enums.BondInviteStatusEnum;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class BondInvite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    private LocalDate date = LocalDate.now();

    @Builder.Default
    @Enumerated(EnumType.STRING)
    private BondInviteStatusEnum status = BondInviteStatusEnum.PENDING;

    @ManyToOne
    @JoinColumn(name = "responsible_id")
    private Responsible responsible;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
