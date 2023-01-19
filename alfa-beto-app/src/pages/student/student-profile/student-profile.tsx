import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import {
  useDeleteBondFromBondedStudent,
  useGetAllBondsFromBondedStudent,
} from "../../../hooks"

import { showToast, StudentProfileTemplate } from "../../../components"
import {
  BondedResponsibleResponse,
  StudentDetailedResponse,
} from "../../../constants"

export const StudentProfile = () => {
  const location = useLocation()
  const getAllBondsFromBondedStudent = useGetAllBondsFromBondedStudent()
  const deleteBondFromBondedStudent = useDeleteBondFromBondedStudent()
  const student: StudentDetailedResponse = location.state

  const [bondedResponsibles, setBondedResponsibles] =
    useState<Array<BondedResponsibleResponse>>()

  useEffect(() => {
    const callGetAllBondsFromStudent = async () => {
      const { call } = getAllBondsFromBondedStudent
      const { response, error } = await call(student.id)
      if (response && !error) {
        setBondedResponsibles(response?.data)
      } else {
        showToast("error", "Erro ao buscar responsáveis vinculados", "error")
      }
    }
    callGetAllBondsFromStudent()
  }, [])

  const onRemoveResponsibleBond = async (bondId: number) => {
    const { call } = deleteBondFromBondedStudent
    const { response, error } = await call(bondId)
    if (response && !error) {
      showToast("success", "Vínculo removido com sucesso!", "check")
    } else {
      showToast(
        "error",
        error.response.data.message ?? "Erro ao remover vínculo!",
        "error"
      )
    }
  }

  return (
    <StudentProfileTemplate
      student={student}
      shouldRenderBondSection={student.firstBond}
      responsibles={bondedResponsibles}
      onRemoveResponsibleBond={onRemoveResponsibleBond}
    />
  )
}
