package com.alfabetoapi.security.config;

import com.alfabetoapi.model.Responsible;
import com.alfabetoapi.model.Student;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.stream.Collectors;

public class UserSecurity implements UserDetails {

    private Long id;
    private String email;
    private String password;
    private List<SimpleGrantedAuthority> roles;

    public UserSecurity(Responsible responsible) {
        this.id = responsible.getId();
        this.email = responsible.getEmail();
        this.password = responsible.getPassword();
        this.roles = rolesConverter(responsible);
    }

    public UserSecurity(Student student) {
        this.id = student.getId();
        this.email = student.getUserName();
        this.password = student.getPassword();
        this.roles = rolesConverter(student);
    }

    private List<SimpleGrantedAuthority> rolesConverter(Responsible responsible) {
        return responsible.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                .collect(Collectors.toList());
    }

    private List<SimpleGrantedAuthority> rolesConverter(Student student) {
        return student.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                .collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    @Override
    public List<SimpleGrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

