import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterStudentRequest } from "../../../constants"
import { FormGroup } from "../../"

import "./student-registration-form.scss"

type Props = {
  onSumbitRegistration: (payload: RegisterStudentRequest) => void
}
export const StudentRegistrationForm = ({ onSumbitRegistration }: Props) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Usuário é necessário"),
    password: Yup.string()
      .required("Senha é necessário")
      .min(8, "A Senha deve ter no mínimo 8 caracteres"),
    confirmPassword: Yup.string()
      .required("Confirmar a senha é necessário")
      .oneOf([Yup.ref("password"), null], "A senha não confere"),
    firstName: Yup.string().required("Primeiro nome é necessário"),
    lastName: Yup.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterStudentRequest>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <div className="register-form">
      <h1>Cadastro Estudante</h1>
      <form onSubmit={handleSubmit(onSumbitRegistration)}>
        <FormGroup
          label="Usuário"
          inputType="text"
          register={register}
          registerName="userName"
          error={errors.userName}
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
