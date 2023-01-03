import {
  useEditGroup,
  useGetStudentsInGroupFromResponsible,
} from "../../../hooks"
import {
  ResponsibleGroupDetailsTemplate,
  ResponsibleGroupsTemplate,
  showToast,
} from "../../../components"
import { useEffect, useState } from "react"
import {
  RegisterStudentGroupRequest,
  StudentDetailedResponse,
} from "../../../constants"
import { useLocation } from "react-router-dom"

export const ResponsibleGroupDetails = () => {
  const location = useLocation()
  const getStudentsInGroupFromResponsible =
    useGetStudentsInGroupFromResponsible()
  const editGroup = useEditGroup()

  const { id, name, description, responsibleFirstName, responsibleLastName } =
    location.state
  const group = {
    id,
    name,
    description,
    responsibleFirstName,
    responsibleLastName,
  }

  const [students, setStudents] = useState<Array<StudentDetailedResponse>>()

  useEffect(() => {
    const callGetGroupStudents = async () => {
      const { call } = getStudentsInGroupFromResponsible
      const { response, error } = await call(id)
      if (response && !error) {
        setStudents(response?.data)
      }
    }
    callGetGroupStudents()
  }, [])

  const onSubmitEditGroupDetails = async (
    payload: RegisterStudentGroupRequest
  ) => {
    const { call } = editGroup

    const { response, error } = await call(id, payload)

    if (response && !error) {
      showToast("success", "Grupo editado com sucesso!", "check")
    } else {
      showToast("error", "Erro ao editar grupo", "error")
    }
  }

  return (
    <ResponsibleGroupDetailsTemplate
      students={students}
      group={group}
      onSubmitEditGroupDetails={onSubmitEditGroupDetails}
    />
  )
}
