import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormGroup } from "../../"
import { ResponsibleLoginFormProps } from "~/constants/forms/responsible-login"

import "./login-form.scss"

type Props = {
  onSumbitLogin: (payload: ResponsibleLoginFormProps) => void
}

export const LoginForm = ({ onSumbitLogin }: Props) => {
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
        <div className="form-buttons">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
}
