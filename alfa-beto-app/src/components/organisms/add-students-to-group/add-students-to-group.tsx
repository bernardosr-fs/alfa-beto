import { useState } from "react"
import { Icon, Modal, StudentAddCard } from "../.."
import { StudentDetailedResponse, AddStudentRequest } from "../../../constants"
import "./add-students-to-group.scss"

type Props = {
  groupId: number
  students: Array<StudentDetailedResponse> | undefined
  onAddStudentToGroup: (payload: AddStudentRequest) => void
}

export const AddStudentToGroup = ({
  groupId,
  students,
  onAddStudentToGroup,
}: Props) => {
  const [mustShowModal, setMustShowModal] = useState(false)

  const renderStudents = () => {
    if (students && students?.length) {
      return students?.map((student, index) => {
        return (
          <StudentAddCard
            key={index}
            groupId={groupId}
            student={student}
            onAddStudentToGroup={onAddStudentToGroup}
          />
        )
      })
    }
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
        {renderStudents() ?? "Parece que não há nenhum estudante disponível!"}
      </Modal>
    </>
  )
}
