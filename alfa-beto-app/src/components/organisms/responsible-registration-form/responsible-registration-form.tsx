import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ResponsibleRegistrationFormProps } from "~/constants/forms/responsible-registration"
import { FormGroup } from "../../"

import "./responsible-registration-form.scss"

export const ResponsibleRegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    confirmEmail: Yup.string()
      .required("Confirm Email is required")
      .oneOf([Yup.ref("email"), null], "Confirm Password does not match"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    firstName: Yup.string().required("Fullname is required"),
    lastName: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    cpf: Yup.string().required("CPF is required"),
    phoneNumber: Yup.string().required("Email is required"),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResponsibleRegistrationFormProps>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: ResponsibleRegistrationFormProps) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <div className="register-form">
      <h1>Cadastro Responsável</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup
          label="Email"
          register={register}
          registerName="email"
          error={errors.email}
        />
        <FormGroup
          label="Confirmar Email"
          register={register}
          registerName="confirmEmail"
          error={errors.confirmEmail}
        />
        <FormGroup
          label="Senha"
          register={register}
          registerName="password"
          error={errors.password}
        />
        <FormGroup
          label="Confirmar Senha"
          register={register}
          registerName="confirmPassword"
          error={errors.confirmPassword}
        />
        <FormGroup
          label="Primeiro Nome"
          register={register}
          registerName="firstName"
          error={errors.firstName}
        />
        <FormGroup
          label="Último Nome"
          register={register}
          registerName="lastName"
          error={errors.lastName}
        />
        <FormGroup
          label="CPF"
          register={register}
          registerName="cpf"
          error={errors.cpf}
        />
        <FormGroup
          label="Telefone"
          register={register}
          registerName="phoneNumber"
          error={errors.phoneNumber}
        />

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
