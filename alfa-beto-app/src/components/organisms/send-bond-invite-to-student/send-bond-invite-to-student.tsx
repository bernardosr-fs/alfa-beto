import { useState } from "react"
import { useForm } from "react-hook-form"
import { Icon, Modal, StudentAddCard } from "../.."
import { StudentResponse, SearchStudentRequest } from "../../../constants"

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

        {searchStudent() ?? "Parece que não há nenhum estudante disponível!"}
      </Modal>
    </>
  )
}
