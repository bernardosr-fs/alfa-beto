import { PATHS, ResponsibleLoginFormProps } from "../../constants"
import { usePostAuthentication } from "../../hooks"
import { LoginTemplate } from "../../components"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const { call } = usePostAuthentication()

  const onSumbitLogin = async (payload: ResponsibleLoginFormProps) => {
    const { error, loading } = await call(payload)

    if (!error && !loading && false) {
      navigate(PATHS.responsibleHome)
    }
  }

  return <LoginTemplate onSumbitLogin={onSumbitLogin} />
}
