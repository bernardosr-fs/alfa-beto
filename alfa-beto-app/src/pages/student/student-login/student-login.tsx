import { PATHS, StudentLoginFormProps } from "../../../constants"
import { useLocalStorage, usePostStudentAuthentication } from "../../../hooks"
import { StudentLoginTemplate, showToast } from "../../../components"
import { useNavigate } from "react-router-dom"

export const StudentLogin = () => {
  const navigate = useNavigate()
  const { call } = usePostStudentAuthentication()
  const localStorage = useLocalStorage()

  const onSumbitLogin = async (payload: StudentLoginFormProps) => {
    console.log(payload)

    const { response, error } = await call(payload)

    if (response && !error) {
      const token = localStorage.getHeader(response, "X-Auth-Token")
      localStorage.save("token", token)
      navigate(PATHS.studentHome)
    } else {
      showToast("error", "Usuário ou senha incorreto(s).", "error")
    }
  }

  return <StudentLoginTemplate onSumbitLogin={onSumbitLogin} />
}