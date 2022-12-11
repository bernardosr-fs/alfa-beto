import { PATHS, ResponsibleLoginFormProps } from "../../constants"
import { usePostAuthentication } from "../../hooks"
import { LoginTemplate } from "../../components"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const postAuthentication = usePostAuthentication()

  const onSumbitLogin = async (payload: ResponsibleLoginFormProps) => {
    const { error, loading } = await postAuthentication.call(payload)
    if (!error && !loading) {
      navigate(PATHS.responsibleHome)
    }
  }

  return <LoginTemplate onSumbitLogin={onSumbitLogin} />
}
