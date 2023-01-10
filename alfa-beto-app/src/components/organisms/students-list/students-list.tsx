import { useState } from "react"
import { StudentAccordion, AddStudentToGroup } from "../.."
import { StudentDetailedResponse, AddStudentRequest } from "../../../constants"
import "./students-list.scss"

type Props = {
  studentsFromGroup: Array<StudentDetailedResponse> | undefined
  studentsAvaibleToAddToGroup: Array<StudentDetailedResponse> | undefined
  onAddStudentToGroup: (payload: AddStudentRequest) => void
  shouldRenderAddStudentButton: boolean
  groupId: number
}

export const StudentsList = ({
  studentsFromGroup,
  studentsAvaibleToAddToGroup,
  onAddStudentToGroup,
  shouldRenderAddStudentButton,
  groupId,
}: Props) => {
  const [selected, setSelected] = useState<number | null>(null)

  const renderStudents = () => {
    if (studentsFromGroup && studentsFromGroup?.length) {
      return studentsFromGroup?.map((student, index) => {
        return (
          <StudentAccordion
            key={index}
            student={student}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })
    }
  }
  return (
    <div className="student-list">
      <h3>Estudantes</h3>
      {shouldRenderAddStudentButton && (
        <AddStudentToGroup
          groupId={groupId}
          students={studentsAvaibleToAddToGroup}
          onAddStudentToGroup={onAddStudentToGroup}
        />
      )}
      {renderStudents() ??
        "Parece que não há nenhum estudante neste grupo ainda!"}
    </div>
  )
}
