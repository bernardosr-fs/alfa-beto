import { PATHS, ResponsibleLoginFormProps } from "../../../constants"
import {
  useLocalStorage,
  usePostResponsibleAuthentication,
} from "../../../hooks"
import { ResponsibleLoginTemplate, showToast } from "../../../components"
import { useNavigate } from "react-router-dom"

export const ResponsibleLogin = () => {
  const navigate = useNavigate()
  const { call } = usePostResponsibleAuthentication()
  const localStorage = useLocalStorage()

  const onSumbitLogin = async (payload: ResponsibleLoginFormProps) => {
    const { response, error } = await call(payload)

    if (response && !error) {
      const token = localStorage.getHeader(response, "X-Auth-Token")
      localStorage.save("token", token)
      navigate(PATHS.responsibleHome)
    } else {
      showToast("error", "Usuário ou senha incorreto(s).", "error")
    }
  }

  return <ResponsibleLoginTemplate onSumbitLogin={onSumbitLogin} />
}
