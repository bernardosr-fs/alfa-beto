import { PATHS, ResponsibleLoginFormProps } from "../../constants"
import { useLocalStorage, usePostResponsibleAuthentication } from "../../hooks"
import { LoginTemplate } from "../../components"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const { call } = usePostResponsibleAuthentication()
  const localStorage = useLocalStorage()

  const onSumbitLogin = async (payload: ResponsibleLoginFormProps) => {
    const { response, error } = await call(payload)

    if (response && !error) {
      const token = localStorage.getHeader(response, "X-Auth-Token")
      localStorage.save("token", token)
      navigate(PATHS.responsibleHome)
    }
  }

  return <LoginTemplate onSumbitLogin={onSumbitLogin} />
}
