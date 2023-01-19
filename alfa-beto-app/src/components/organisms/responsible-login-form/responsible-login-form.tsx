import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormGroup } from "../.."
import { useNavigate } from "react-router-dom"
import { PATHS, ResponsibleLoginFormProps } from "../../../constants"

import "./responsible-login-form.scss"

type Props = {
  onSumbitLogin: (payload: ResponsibleLoginFormProps) => void
}

export const ResponsibleLoginForm = ({ onSumbitLogin }: Props) => {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email é necessário"),
    password: Yup.string().required("Senha é necessário"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResponsibleLoginFormProps>({
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
        <div
          className="register-redirect"
          onClick={() => navigate(PATHS.responsibleRegistration)}
        >
          Não tem uma conta? Cadastre-se
        </div>
        <div className="form-buttons">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}
