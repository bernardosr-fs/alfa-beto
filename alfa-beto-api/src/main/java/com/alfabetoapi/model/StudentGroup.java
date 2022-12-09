package com.alfabetoapi.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class StudentGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @Builder.Default
    private LocalDate creationDate = LocalDate.now();

    @ManyToOne
    @JoinColumn(name = "responsible_id")
    private Responsible responsible;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "group")
    private List<GroupEntry> students;
}
