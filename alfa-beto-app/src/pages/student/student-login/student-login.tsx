import { PATHS, StudentLoginFormProps } from "../../../constants"
import { useLocalStorage, usePostStudentAuthentication } from "../../../hooks"
import { StudentLoginTemplate, showToast } from "../../../components"
import { useNavigate } from "react-router-dom"

export const StudentLogin = () => {
  const navigate = useNavigate()
  const { call } = usePostStudentAuthentication()
  const localStorage = useLocalStorage()

  const onSumbitLogin = async (payload: StudentLoginFormProps) => {
    const { response, error } = await call(payload)

    if (response && !error) {
      const token = localStorage.getHeader(response, "X-Auth-Token")
      localStorage.save("token", token)
      localStorage.save("userData", JSON.stringify(response.data))
      navigate(PATHS.studentHome)
    } else {
      showToast("error", "Usuário ou senha incorreto(s).", "error")
    }
  }

  return <StudentLoginTemplate onSumbitLogin={onSumbitLogin} />
}
