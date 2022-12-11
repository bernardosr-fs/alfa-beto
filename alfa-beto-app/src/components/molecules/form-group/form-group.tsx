import { FieldError, UseFormRegister } from "react-hook-form"

import "./form-group.scss"

type Props = {
  label: string
  inputType: string
  register: UseFormRegister<any>
  registerName:
    | "email"
    | "password"
    | "confirmPassword"
    | "firstName"
    | "lastName"
    | "cpf"
    | "phoneNumber"
  error: FieldError | undefined
}

export const FormGroup = ({
  label,
  inputType,
  register,
  registerName,
  error,
}: Props) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={inputType}
        {...register(registerName)}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      <div className="invalid-feedback">{error?.message}</div>
    </div>
  )
}
