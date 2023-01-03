import { FieldError, UseFormRegister } from "react-hook-form"

import "./form-group.scss"

type Props = {
  className?: string
  labelClassName?: string
  label: string
  inputType: string
  register: UseFormRegister<any>
  registerName: string
  error: FieldError | undefined
  disableAutoComplete?: boolean
}

export const FormGroup = ({
  className,
  labelClassName,
  label,
  inputType,
  register,
  registerName,
  error,
  disableAutoComplete,
}: Props) => {
  return (
    <div className="form-group">
      <label className={labelClassName}>{label}</label>
      <input
        type={inputType}
        {...register(registerName)}
        className={`form-control ${error ? "is-invalid" : ""} ${className}`}
        autoComplete={disableAutoComplete ? "off" : "on"}
      />
      <div className="invalid-feedback">{error?.message}</div>
    </div>
  )
}
