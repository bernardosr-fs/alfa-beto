package com.alfabetoapi.validator;

import com.alfabetoapi.controller.request.EditResponsibleRequest;
import com.alfabetoapi.controller.request.EditStudentRequest;
import com.alfabetoapi.controller.request.ResponsibleRegisterRequest;
import com.alfabetoapi.controller.request.StudentRegisterRequest;
import com.alfabetoapi.repository.ResponsibleRepository;
import com.alfabetoapi.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.regex.Pattern;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;
import static java.util.regex.Pattern.compile;

@Component
@RequiredArgsConstructor
public class UserValidator {

    private final ResponsibleRepository responsibleRepository;
    private final StudentRepository studentRepository;

    public void registerResponsibleValidation(ResponsibleRegisterRequest request) {
        validateEmail(request.getEmail());
        validateResponsiblePassword(request.getPassword(), request.getConfirmPassword());
        validateFirstName(request.getFirstName());
        validateCpf(request.getCpf());
        validatePhoneNumber(request.getPhoneNumber());
    }

    public void editResponsibleValidation(EditResponsibleRequest request) {
        validateResponsiblePassword(request.getPassword(), request.getConfirmPassword());
        validateFirstName(request.getFirstName());
        validateCpf(request.getCpf());
        validatePhoneNumber(request.getPhoneNumber());
    }

    public void registerStudentValidation(StudentRegisterRequest request) {
        validateUserName(request.getUserName());
        validateStudentPassword(request.getPassword(), request.getConfirmPassword());
        validateFirstName(request.getFirstName());
    }

    public void editStudentValidation(EditStudentRequest request) {
        validateStudentPassword(request.getPassword(), request.getConfirmPassword());
        validateFirstName(request.getFirstName());
    }

    private void validateEmail(String email) {
        if (isNull(email))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um email ?? necess??rio.");

        if (!email.contains("@"))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Email inv??lido.");

        if (responsibleRepository.existsByEmail(email))
            throw new ResponseStatusException(HttpStatus.FOUND, "J?? existe uma conta cadastrada com esse email.");
    }

    private void validateUserName(String userName) {
        if (isNull(userName))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um nome de usu??rio ?? necess??rio.");

        if (userName.length() > 24)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "O nome de usu??rio deve ter no m??ximo 24 caracteres.");

        if (compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE).matcher(userName).find())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "O nome de usu??rio n??o deve conter caracteres especiais.");

        if (studentRepository.existsByUserName(userName))
            throw new ResponseStatusException(HttpStatus.FOUND, "J?? existe um estudante cadastrado com esse nome de usu??rio.");
    }

    private void validatePassword(String password) {
        if (isNull(password))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Uma senha ?? necess??ria.");

        if (password.length() < 8)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha deve ter no m??nimo 8 caracteres.");
    }

    private void validateResponsiblePassword(String password, String confirmPassword) {
        var upperCasePattern = compile("[A-Z ]");
        var lowerCasePattern = compile("[a-z ]");
        var numbersPattern = compile("[0-9 ]");

        validatePassword(password);

        if (!upperCasePattern.matcher(password).find() || !lowerCasePattern.matcher(password).find() ||
                !numbersPattern.matcher(password).find()) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha deve conter no m??nimo uma letra mai??scula, " +
                    "uma letra min??scula e um n??mero.");
        }

        if (!password.equals(confirmPassword))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha n??o se iguala com a confirma????o de senha.");
    }

    private void validateStudentPassword(String password, String confirmPassword) {
        var lettersPattern = compile("[a-zA-Z ]");
        var numbersPattern = compile("[0-9 ]");
        var specialCharsPattern = compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE);

        validatePassword(password);

        if (specialCharsPattern.matcher(password).find())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha n??o deve conter caracteres especiais.");

        if (!lettersPattern.matcher(password).find() || !numbersPattern.matcher(password).find())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha deve conter no m??nimo uma letra e um n??mero.");

        if (!password.equals(confirmPassword))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A senha n??o se iguala com a confirma????o de senha.");
    }

    private void validateFirstName(String firstName) {
        if (isNull(firstName) || firstName.isEmpty())
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um nome ?? necess??rio.");
    }

    private void validateCpf(String cpf) {
        if (isNull(cpf))
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "Um CPF ?? necess??rio.");

        if (compile("[^0-9 ]").matcher(cpf).find() || cpf.length() != 11)
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "CPF inv??lido.");
    }

    private void validatePhoneNumber(String phoneNumber) {
        if (nonNull(phoneNumber) && !phoneNumber.isEmpty()) {
            if (compile("[^0-9 ]").matcher(phoneNumber).find() || phoneNumber.length() != 11)
                throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "N??mero de telefone inv??lido.");
        }
    }
}
