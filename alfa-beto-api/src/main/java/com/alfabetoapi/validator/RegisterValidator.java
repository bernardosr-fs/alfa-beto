package com.alfabetoapi.validator;

import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;
import java.util.regex.Pattern;

@Component
@RequiredArgsConstructor
public class RegisterValidator {

    private final ResponsibleRepository responsibleRepository;
    private final StudentRepository studentRepository;

    public void responsibleValidation(ResponsibleRegisterRequest request) {
        validateEmail(request.getEmail());
        validateResponsiblePassword(request.getPassword(), request.getConfirmPassword());
        validateFirstName(request.getFirstName());
        validateCpf(request.getCpf());
        validatePhoneNumber(request.getPhoneNumber());
    }

    public void studentValidation(StudentRegisterRequest request) {
        validateUserName(request.getUserName());
        validateStudentPassword(request.getPassword(), request.getConfirmPassword());
        validateFirstName(request.getFirstName());
    }

    private void validateEmail(String email) {
        if (Objects.isNull(email))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um email é necessário.");

        if (!email.contains("@"))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Email inválido.");

        if (responsibleRepository.existsByEmail(email))
            throw new ResponseStatusException(HttpStatus.FOUND, "Já existe uma conta cadastrada com esse email.");
    }

    private void validateUserName(String userName) {
        if (Objects.isNull(userName))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um nome de usuário é necessário.");

        if (userName.length() > 24)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "O nome de usuário deve ter no máximo 24 caracteres.");

        if (Pattern.compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE).matcher(userName).find())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "O nome de usuário não deve conter caracteres especiais.");

        if (studentRepository.existsByUserName(userName))
            throw new ResponseStatusException(HttpStatus.FOUND, "Já existe um estudante cadastrado com esse nome de usuário.");
    }

    private void validatePassword(String password) {
        if (Objects.isNull(password))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Uma senha é necessária.");

        if (password.length() < 8)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha deve ter no mínimo 8 caracteres.");
    }

    private void validateResponsiblePassword(String password, String confirmPassword) {
        var upperCasePattern = Pattern.compile("[A-Z ]");
        var lowerCasePattern = Pattern.compile("[a-z ]");
        var numbersPattern = Pattern.compile("[0-9 ]");

        validatePassword(password);

        if (!upperCasePattern.matcher(password).find() || !lowerCasePattern.matcher(password).find() ||
                !numbersPattern.matcher(password).find()) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha deve conter no mínimo uma letra maiúscula, " +
                    "uma letra minúscula e um número.");
        }

        if (!password.equals(confirmPassword))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha não se iguala com a confirmação de senha.");
    }

    private void validateStudentPassword(String password, String confirmPassword) {
        var lettersPattern = Pattern.compile("[a-zA-Z ]");
        var numbersPattern = Pattern.compile("[0-9 ]");
        var specialCharsPattern = Pattern.compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE);

        validatePassword(password);

        if (specialCharsPattern.matcher(password).find())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha não deve conter caracteres especiais.");

        if (!lettersPattern.matcher(password).find() || !numbersPattern.matcher(password).find())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha deve conter no mínimo uma letra e um número.");

        if (!password.equals(confirmPassword))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha não se iguala com a confirmação de senha.");
    }

    private void validateFirstName(String firstName) {
        if (Objects.isNull(firstName) || firstName.isEmpty())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um nome é necessário.");
    }

    private void validateCpf(String cpf) {
        if (Objects.isNull(cpf))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um CPF é necessário.");

        if (Pattern.compile("[^0-9 ]").matcher(cpf).find() || cpf.length() != 11)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "CPF inválido.");
    }

    private void validatePhoneNumber(String phoneNumber) {
        if (Objects.nonNull(phoneNumber) && !phoneNumber.isEmpty()) {
            if (Pattern.compile("[^0-9 ]").matcher(phoneNumber).find() || phoneNumber.length() != 11)
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Número de telefone inválido.");
        }
    }
}
