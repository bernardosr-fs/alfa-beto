import {
  useSendInvite,
  useGetAllBondedStudents,
  useGetSearchStudent,
} from "../../../hooks"
import { ResponsibleStudentsTemplate, showToast } from "../../../components"
import { useEffect, useState } from "react"
import {
  SearchStudentRequest,
  StudentDetailedResponse,
  StudentResponse,
} from "../../../constants"

export const ResponsibleStudents = () => {
  const getAllBondedStudents = useGetAllBondedStudents()
  const getSearchStudent = useGetSearchStudent()
  const sendInvite = useSendInvite()

  const [bondedStudents, setBondedStudents] =
    useState<Array<StudentDetailedResponse>>()

  const [searchedStudent, setSearchedStudent] = useState<StudentResponse>()

  useEffect(() => {
    const callGetBondedStudents = async () => {
      const { call } = getAllBondedStudents
      const { response, error } = await call()
      if (response && !error) {
        setBondedStudents(response.data)
      }
    }
    callGetBondedStudents()
  }, [])

  const onSendStudentBondInvite = async (studentId: number) => {
    const { call } = sendInvite

    const { response, error } = await call(studentId)

    if (response && !error) {
      showToast("success", "Convite de vínculo enviado com sucesso!", "check")
    } else {
      showToast("error", "Erro ao adicionar estudante", "error")
    }
  }

  const onSearchStudent = async (payload: SearchStudentRequest) => {
    const { call } = getSearchStudent

    const { response, error } = await call(payload.userName)

    if (response && !error) {
      setSearchedStudent(response.data)
    } else {
      showToast("error", "Estudante não encontrado", "error")
    }
  }

  return (
    <ResponsibleStudentsTemplate
      searchedStudent={searchedStudent}
      students={bondedStudents}
      onSendStudentBondInvite={onSendStudentBondInvite}
      onSearchStudent={onSearchStudent}
    />
  )
}
