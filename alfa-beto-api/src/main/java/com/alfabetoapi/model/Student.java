package com.alfabetoapi.model;

import com.alfabetoapi.security.model.Role;
import lombok.*;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String password;
    private String firstName;
    private String lastName;

    @Builder.Default
    private BigInteger coins = BigInteger.valueOf(0);

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")
    private Set<Role> roles;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<Bond> bonds;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<BondInvite> bondInvites;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<GroupEntry> groups;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<ExerciseAttempt> exerciseAttempts;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<MedalStudent> medals;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<CustomizationStudent> customizations;
}
