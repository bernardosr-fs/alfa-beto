import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Icon, Modal, StudentAddCard } from "../.."
import {
  StudentResponse,
  SearchStudentRequest,
  PATHS,
} from "../../../constants"

import "./send-bond-invite-to-student.scss"

type Props = {
  student?: StudentResponse
  onAddStudent: (id: number) => void
  onSearchStudent: (payload: SearchStudentRequest) => void
}

export const SendBondInviteToStudent = ({
  student,
  onAddStudent,
  onSearchStudent,
}: Props) => {
  const navigate = useNavigate()

  const [mustShowModal, setMustShowModal] = useState(false)

  const searchStudent = () => {
    if (student)
      return (
        <StudentAddCard
          addType="bond"
          student={student}
          onSendBondInvite={onAddStudent}
        />
      )
  }

  const { register, handleSubmit } = useForm<SearchStudentRequest>()

  const renderNoStudents = () => {
    return (
      <div>
        <span>Parece que não há nenhum estudante neste grupo ainda!</span>
        <div
          className="register-student-link-button"
          onClick={() => navigate(PATHS.studentRegistration)}
        >
          <span>Deseja cadastrar um novo?</span>
          <Icon name="externalLink" />
        </div>
      </div>
    )
  }

  return (
    <>
      <button
        className="add-student-to-group-button"
        onClick={() => setMustShowModal(!mustShowModal)}
      >
        <Icon name="plusCircle" />
      </button>
      <Modal mustShow={mustShowModal} setMustShowModal={setMustShowModal}>
        <form
          onSubmit={handleSubmit(onSearchStudent)}
          className="form-bond-invite"
          autoComplete={"off"}
        >
          <input
            type="text"
            {...register("userName")}
            autoComplete={"off"}
            placeholder="Username do Estudante"
          ></input>

          <button type="submit">
            <Icon name="search" />
          </button>
        </form>

        {searchStudent() ?? renderNoStudents()}
      </Modal>
    </>
  )
}
