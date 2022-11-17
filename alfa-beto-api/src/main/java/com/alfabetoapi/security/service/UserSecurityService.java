package com.alfabetoapi.security.service;

import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.config.UserSecurity;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserSecurityService implements UserDetailsService {

    private final ResponsibleRepository responsibleRepository;
    private final StudentRepository studentRepository;

    @Override
    public UserDetails loadUserByUsername(String loggingName) throws UsernameNotFoundException {
        if (loggingName.contains("@")) {
            var responsible = responsibleRepository.findByEmail(loggingName);
            return new UserSecurity(responsible);
        }
        var student = studentRepository.findByUserName(loggingName);
        return new UserSecurity(student);
    }
}
