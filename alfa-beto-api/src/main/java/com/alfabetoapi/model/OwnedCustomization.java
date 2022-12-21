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
public class OwnedCustomization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Builder.Default
    private LocalDate date = LocalDate.now();

    @Builder.Default
    private boolean equipped = false;

    @ManyToOne
    @JoinColumn(name = "customization_id")
    private Customization customization;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
