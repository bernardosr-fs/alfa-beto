import { PATHS, ResponsibleLoginFormProps } from "../../constants"
import { usePostAuthentication } from "../../hooks"
import { LoginTemplate } from "../../components"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const { call } = usePostAuthentication()

  const onSumbitLogin = async (payload: ResponsibleLoginFormProps) => {
    const { response, error } = await call(payload)

    if (!error) {
      navigate(PATHS.responsibleHome)
    }
  }

  return <LoginTemplate onSumbitLogin={onSumbitLogin} />
}
