import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormGroup } from "../.."
import { StudentLoginFormProps } from "../../../constants"

import "./student-login-form.scss"

type Props = {
  onSumbitLogin: (payload: StudentLoginFormProps) => void
}

export const StudentLoginForm = ({ onSumbitLogin }: Props) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Usuário é necessário"),
    password: Yup.string().required("Senha é necessário"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentLoginFormProps>({
    resolver: yupResolver(validationSchema),
  })

  return (
    <div className="login-form">
      <img
        src={require("../../../assets/images/logo.png")}
        alt="Logotipo alfabeto"
      />
      <form onSubmit={handleSubmit(onSumbitLogin)}>
        <FormGroup
          label="Usuário"
          inputType="text"
          register={register}
          registerName="username"
          error={errors.username}
        />
        <FormGroup
          label="Senha"
          inputType="password"
          register={register}
          registerName="password"
          error={errors.password}
        />
        <div className="form-buttons">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}
