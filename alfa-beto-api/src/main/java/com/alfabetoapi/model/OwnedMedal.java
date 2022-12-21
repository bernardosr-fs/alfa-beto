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
public class OwnedMedal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    private LocalDate date = LocalDate.now();

    @ManyToOne
    @JoinColumn(name = "medal_id")
    private Medal medal;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
