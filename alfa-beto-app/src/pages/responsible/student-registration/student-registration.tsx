import { RegisterStudentRequest } from "../../../constants"
import { usePostStudentRegistration } from "../../../hooks"
import { StudentRegistrationTemplate, showToast } from "../../../components"

export const StudentRegistration = () => {
  const postStudentRegistration = usePostStudentRegistration()

  const onSumbitRegistration = async (payload: RegisterStudentRequest) => {
    const { call } = postStudentRegistration

    const { response, error } = await call(payload)

    if (response && !error) {
      showToast("success", "Conta criada com sucesso!", "check")
    } else {
      showToast(
        "error",
        error.response.data.message ?? "Erro ao criar conta",
        "error"
      )
    }
  }

  return (
    <StudentRegistrationTemplate onSumbitRegistration={onSumbitRegistration} />
  )
}
