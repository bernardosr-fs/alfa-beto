import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterResponsibleRequest } from "../../../constants"
import { FormGroup } from "../../"

import "./responsible-registration-form.scss"

type Props = {
  onSumbitRegistration: (payload: RegisterResponsibleRequest) => void
}
export const ResponsibleRegistrationForm = ({
  onSumbitRegistration,
}: Props) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email é necessário").email("Email inválido"),
    password: Yup.string()
      .required("Senha é necessário")
      .min(8, "A Senha deve ter no mínimo 8 caracteres")
      .test("isValidPass", "Senha inválida", (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value ?? "")
        const hasLowerCase = /[a-z]/.test(value ?? "")
        let validConditions = 0
        const numberOfMustBeValidConditions = 2
        const conditions = [hasLowerCase, hasUpperCase]
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        )
        if (validConditions >= numberOfMustBeValidConditions) {
          return true
        }
        return false
      }),
    confirmPassword: Yup.string()
      .required("Confirmar a senha é necessário")
      .oneOf([Yup.ref("password"), null], "A senha não confere"),
    firstName: Yup.string().required("Primeiro nome é necessário"),
    lastName: Yup.string(),
    cpf: Yup.string()
      .required("CPF é necessário")
      .min(11, "O CPF deve conter 11 caracteres"),
    phoneNumber: Yup.string().min(
      11,
      "Número de telefone deve conter 11 caracteres"
    ),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterResponsibleRequest>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <div className="register-form">
      <h1>Cadastro Responsável</h1>
      <form onSubmit={handleSubmit(onSumbitRegistration)}>
        <FormGroup
          label="Email"
          inputType="text"
          register={register}
          registerName="email"
          error={errors.email}
        />
        <FormGroup
          label="Senha"
          inputType="password"
          register={register}
          registerName="password"
          error={errors.password}
        />
        <FormGroup
          label="Confirmar Senha"
          inputType="password"
          register={register}
          registerName="confirmPassword"
          error={errors.confirmPassword}
        />
        <FormGroup
          label="Primeiro Nome"
          inputType="text"
          register={register}
          registerName="firstName"
          error={errors.firstName}
        />
        <FormGroup
          label="Último Nome"
          inputType="text"
          register={register}
          registerName="lastName"
          error={errors.lastName}
        />
        <FormGroup
          label="CPF"
          inputType="text"
          register={register}
          registerName="cpf"
          error={errors.cpf}
        />
        <FormGroup
          label="Telefone"
          inputType="text"
          register={register}
          registerName="phoneNumber"
          error={errors.phoneNumber}
        />

        <div className="form-buttons">
          <button type="submit">Cadastrar</button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  )
}
