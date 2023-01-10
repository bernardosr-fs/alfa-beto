import {
  useEditGroup,
  useGetStudentsInGroupFromResponsible,
  useAddStudentToGroup,
  useGetAllBondedStudents,
} from "../../../hooks"
import { ResponsibleGroupDetailsTemplate, showToast } from "../../../components"
import { useEffect, useState } from "react"
import {
  AddStudentRequest,
  RegisterStudentGroupRequest,
  StudentDetailedResponse,
} from "../../../constants"
import { useLocation } from "react-router-dom"

export const ResponsibleGroupDetails = () => {
  const location = useLocation()
  const getStudentsInGroupFromResponsible =
    useGetStudentsInGroupFromResponsible()
  const editGroup = useEditGroup()
  const addStudentToGroup = useAddStudentToGroup()
  const getAllBondedStudents = useGetAllBondedStudents()

  const { id, name, description, responsibleFirstName, responsibleLastName } =
    location.state
  const group = {
    id,
    name,
    description,
    responsibleFirstName,
    responsibleLastName,
  }

  const [studentsFromGroup, setStudentsFromGroup] =
    useState<Array<StudentDetailedResponse>>()

  const [studentsAvaibleToAddToGroup, setStudentsAvaibleToAddToGroup] =
    useState<Array<StudentDetailedResponse>>()

  useEffect(() => {
    const callGetGroupStudents = async () => {
      const { call } = getStudentsInGroupFromResponsible
      const { response, error } = await call(id)
      if (response && !error) {
        setStudentsFromGroup(response?.data)
      }
    }
    callGetGroupStudents()
  }, [])

  useEffect(() => {
    const callGetBondedStudents = async () => {
      const { call } = getAllBondedStudents
      const { response, error } = await call()
      if (response && !error) {
        setStudentsAvaibleToAddToGroup(response.data)
      }
    }
    callGetBondedStudents()
  }, [])

  const filterStudentThatAreNotInGroup = () => {
    return studentsAvaibleToAddToGroup?.filter(
      (student) =>
        !studentsFromGroup?.find(
          (studentFromGroup) => studentFromGroup.id === student.id
        )
    )
  }

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

  const onAddStudentToGroup = async (payload: AddStudentRequest) => {
    const { call } = addStudentToGroup

    const { response, error } = await call(payload)

    if (response && !error) {
      showToast("success", "Estudante adicionado com sucesso!", "check")
    } else {
      showToast("error", "Erro ao adicionar estudante", "error")
    }
  }

  return (
    <ResponsibleGroupDetailsTemplate
      studentsFromGroup={studentsFromGroup}
      studentsAvaibleToAddToGroup={filterStudentThatAreNotInGroup()}
      group={group}
      onSubmitEditGroupDetails={onSubmitEditGroupDetails}
      onAddStudentToGroup={onAddStudentToGroup}
    />
  )
}
