import { useEffect, useState } from "react"
import {
  useAcceptInvite,
  useGetAllPendingInvites,
  useGetStudentProfile,
  useRecuseInvite,
} from "../../../hooks"

import { OwnProfileTemplate, showToast } from "../../../components"
import { BondInviteResponse, StudentDetailedResponse } from "../../../constants"

export const OwnProfile = () => {
  const getStudentProfile = useGetStudentProfile()
  const getPendingInvites = useGetAllPendingInvites()
  const acceptInvite = useAcceptInvite()
  const recuseInvite = useRecuseInvite()

  const [student, setStudent] = useState<StudentDetailedResponse>()
  const [pendingInvites, setPendingInvites] =
    useState<Array<BondInviteResponse>>()

  useEffect(() => {
    const getLoggedStudentProfile = async () => {
      const { call } = getStudentProfile
      const { response, error } = await call()
      if (response && !error) {
        setStudent(response?.data)
      } else {
        showToast("error", "Erro ao buscar informações do perfil", "error")
      }
    }
    getLoggedStudentProfile()
  }, [])

  const onAcceptInvite = async (inviteId: number) => {
    const { call } = acceptInvite

    const { response, error } = await call(inviteId)

    if (response && !error) {
      showToast("success", "Convite aceito com sucesso!", "check")
    } else {
      showToast("error", "Erro ao aceitar convite!", "error")
    }
  }

  const onRecuseInvite = async (inviteId: number) => {
    const { call } = recuseInvite

    const { response, error } = await call(inviteId)

    if (response && !error) {
      showToast("success", "Convite recusado com sucesso!", "check")
    } else {
      showToast("error", "Erro ao recusar convite!", "error")
    }
  }

  useEffect(() => {
    const getAllPendingInvites = async () => {
      const { call } = getPendingInvites
      const { response, error } = await call()
      if (response && !error) {
        setPendingInvites(response?.data)
      } else {
        showToast(
          "error",
          "Erro ao buscar pedidos de vínculo pendentes",
          "error"
        )
      }
    }
    getAllPendingInvites()
  }, [])

  return (
    <OwnProfileTemplate
      student={student}
      pendingInvites={pendingInvites}
      onAcceptInvite={onAcceptInvite}
      onRecuseInvite={onRecuseInvite}
    />
  )
}
