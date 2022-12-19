package com.alfabetoapi.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.session.web.http.HttpSessionIdResolver;

import static org.springframework.session.web.http.HeaderHttpSessionIdResolver.xAuthToken;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class SecurityConfig {

    @Bean
    public HttpSessionIdResolver httpSessionIdResolver() {
        return xAuthToken();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().and()
                .authorizeRequests().antMatchers("/login/**", "/register/responsible").permitAll().and()
                .authorizeRequests().antMatchers(
                        "/bond/students",
                        "/bond/{\\d+}/responsibles",
                        "/bond/{\\d+}/delete",
                        "/register/student",
                        "/search/student/**",
                        "/bond-invite/send/**",
                        "/group/of-responsible/**",
                        "/group/create",
                        "/group/add",
                        "/group/edit/**",
                        "/responsible/profile",
                        "/student/profile/{\\d+}").hasRole("RESPONSIBLE").and()
                .authorizeRequests().antMatchers(
                        "/bond/responsibles",
                        "/bond-invite/pending-invites",
                        "/bond-invite/{\\d+}/accept",
                        "/bond-invite/{\\d+}/recuse",
                        "/group/of-student/**",
                        "/student/profile",
                        "/shop/**").hasRole("STUDENT").and()
                .authorizeRequests().anyRequest().authenticated()
                .and()
                .httpBasic();

        return http.build();
    }
}
