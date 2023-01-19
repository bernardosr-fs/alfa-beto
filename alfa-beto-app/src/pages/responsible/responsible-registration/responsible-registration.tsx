import { RegisterResponsibleRequest } from "../../../constants"
import { usePostResponsibleRegistration } from "../../../hooks"
import { ResponsibleRegistrationTemplate, showToast } from "../../../components"

export const ResponsibleRegistration = () => {
  const postResponsibleRegistration = usePostResponsibleRegistration()

  const onSumbitRegistration = async (payload: RegisterResponsibleRequest) => {
    const { call } = postResponsibleRegistration

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
    <ResponsibleRegistrationTemplate
      onSumbitRegistration={onSumbitRegistration}
    />
  )
}
