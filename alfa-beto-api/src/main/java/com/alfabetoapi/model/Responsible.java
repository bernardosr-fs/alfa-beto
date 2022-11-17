package com.alfabetoapi.model;

import com.alfabetoapi.security.model.Role;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Responsible {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private String cpf;
    private String phoneNumber;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "responsible_id")
    private Set<Role> roles;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student")
    private List<Bond> bonds;
}
