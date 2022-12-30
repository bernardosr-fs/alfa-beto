import { useCreateGroup, useGetResponsibleGroups } from "../../hooks"
import { ResponsibleGroupsTemplate, showToast } from "../../components"
import { useEffect, useState } from "react"
import {
  RegisterStudentGroupRequest,
  StudentGroupResponse,
} from "../../constants"

export const ResponsibleGroups = () => {
  const getResponsibleGroups = useGetResponsibleGroups()
  const createNewGroup = useCreateGroup()

  const [responsibleGroups, setResponsibleGroups] =
    useState<Array<StudentGroupResponse>>()

  useEffect(() => {
    const callGetResponsibleGroups = async () => {
      const { call } = getResponsibleGroups
      const { response, error } = await call()

      if (response && !error) {
        setResponsibleGroups(response?.data)
      }
    }
    callGetResponsibleGroups()
  }, [])

  const onSubmitCreateNewGroup = async (
    payload: RegisterStudentGroupRequest
  ) => {
    const { call } = createNewGroup

    const { response, error } = await call(payload)

    if (response && !error) {
      showToast("success", "Grupo criado com sucesso!", "check")
    } else {
      showToast("error", "Erro ao criar grupo", "error")
    }
  }

  return (
    <ResponsibleGroupsTemplate
      responsibleGroups={responsibleGroups}
      onSubmitCreateNewGroup={onSubmitCreateNewGroup}
    />
  )
}
