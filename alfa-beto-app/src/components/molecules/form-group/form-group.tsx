import { FieldError, UseFormRegister } from "react-hook-form"
import { ResponsibleRegistrationFormProps } from "~/constants/forms/responsible-registration"

import "./form-group.scss"

type Props = {
  label: string
  register: UseFormRegister<ResponsibleRegistrationFormProps>
  registerName:
    | "email"
    | "password"
    | "confirmEmail"
    | "confirmPassword"
    | "firstName"
    | "lastName"
    | "cpf"
    | "phoneNumber"
  error: FieldError | undefined
}

export const FormGroup = ({ label, register, registerName, error }: Props) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        {...register(registerName)}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      <div className="invalid-feedback">{error?.message}</div>
    </div>
  )
}
