package com.alfabetoapi.service;

import com.alfabetoapi.controller.request.EditStudentRequest;
import com.alfabetoapi.controller.response.OwnedCustomizationResponse;
import com.alfabetoapi.controller.response.StudentDetailedResponse;
import com.alfabetoapi.enums.CustomizationTypeEnum;
import com.alfabetoapi.mapper.OwnedCustomizationMapper;
import com.alfabetoapi.mapper.StudentMapper;
import com.alfabetoapi.repository.BondRepository;
import com.alfabetoapi.repository.OwnedCustomizationRepository;
import com.alfabetoapi.repository.StudentRepository;
import com.alfabetoapi.security.service.LoginService;
import com.alfabetoapi.validator.UserValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Objects.nonNull;

@Service
@RequiredArgsConstructor
public class StudentProfileService {

    private final LoginService loginService;
    private final FindByIdService findByIdService;

    private final StudentRepository studentRepository;
    private final BondRepository bondRepository;
    private final OwnedCustomizationRepository ownedCustomizationRepository;

    private final PasswordEncoder passwordEncoder;

    private final UserValidator userValidator;


    public StudentDetailedResponse getProfile() {
        var student = loginService.getLoggedStudent();

        return StudentMapper.toDetailedResponse(student, false);
    }

    public void editProfile(Long studentId, EditStudentRequest request) {
        var student = findByIdService.findStudent(studentId);

        var responsible = loginService.getLoggedResponsible();

        if (!bondRepository.existsByResponsible_idAndStudent_idAndFirstBond(responsible.getId(), student.getId(), true))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Você não tem permissão para editar as informações desse estudante.");

        userValidator.editStudentValidation(request);

        student.setPassword(passwordEncoder.encode(request.getPassword()));
        student.setFirstName(request.getFirstName());
        student.setLastName(request.getLastName());

        studentRepository.save(student);
    }

    public List<OwnedCustomizationResponse> getOwnedCustomizations(CustomizationTypeEnum type) {
        var student = loginService.getLoggedStudent();

        var ownedCustomizations =
                ownedCustomizationRepository.findAllByStudent_idAndCustomization_type(student.getId(), type);

        return ownedCustomizations.stream().map(OwnedCustomizationMapper::toResponse).collect(Collectors.toList());
    }

    public void equipCustomization(Long customizationId) {
        var student = loginService.getLoggedStudent();

        var ownedCustomization = ownedCustomizationRepository.findByCustomization_idAndStudent_id(customizationId, student.getId());

        if (ownedCustomization == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Você ainda não possui esse item!");

        var alreadyEquippedCustomization =
                ownedCustomizationRepository.findByStudent_idAndCustomization_typeAndEquipped(student.getId(), ownedCustomization.getCustomization().getType(), true);

        if (nonNull(alreadyEquippedCustomization)) {
            alreadyEquippedCustomization.setEquipped(false);
            ownedCustomizationRepository.save(alreadyEquippedCustomization);
        }

        ownedCustomization.setEquipped(true);

        ownedCustomizationRepository.save(ownedCustomization);
    }
}
