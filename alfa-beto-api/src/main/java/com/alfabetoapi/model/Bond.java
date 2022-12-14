package com.alfabetoapi.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Bond {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    private LocalDate date = LocalDate.now();

    private boolean firstBond;

    @ManyToOne
    @JoinColumn(name = "responsible_id")
    private Responsible responsible;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
