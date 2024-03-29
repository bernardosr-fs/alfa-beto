import { useState } from "react"
import {
  StudentAccordion,
  AddStudentToGroup,
  SendBondInviteToStudent,
} from "../.."
import {
  StudentDetailedResponse,
  AddStudentRequest,
  StudentResponse,
  SearchStudentRequest,
  PATHS,
} from "../../../constants"
import "./students-list.scss"

type Props = {
  className?: string
  studentToSendInvite?: StudentResponse
  studentsFromGroup?: Array<StudentDetailedResponse>
  studentsAvaibleToAddToGroup?: Array<StudentDetailedResponse>
  onAddStudentToGroup?: (payload: AddStudentRequest) => void
  onSendStudentBondInvite?: (id: number) => void
  onSearchStudent?: (payload: SearchStudentRequest) => void
  shouldRenderAddStudentButton: boolean
  groupId?: number
  redirectOnClick?: boolean
}

export const StudentsList = ({
  className,
  studentToSendInvite,
  studentsFromGroup,
  studentsAvaibleToAddToGroup = undefined,
  onAddStudentToGroup,
  onSendStudentBondInvite,
  onSearchStudent,
  shouldRenderAddStudentButton = false,
  groupId = 0,
}: Props) => {
  const [selected, setSelected] = useState<number | null>(null)

  const renderStudents = () => {
    if (studentsFromGroup && studentsFromGroup?.length) {
      return studentsFromGroup?.map((student, index) => {
        return (
          <StudentAccordion
            key={student.id}
            student={student}
            index={index}
            selected={selected}
            setSelected={setSelected}
            redirectPath={
              onSendStudentBondInvite && onSearchStudent
                ? PATHS.studentProfile
                : undefined
            }
          />
        )
      })
    }
  }

  const renderButton = () => {
    if (shouldRenderAddStudentButton) {
      if (groupId && onAddStudentToGroup) {
        return (
          <AddStudentToGroup
            groupId={groupId}
            students={studentsAvaibleToAddToGroup}
            onAddStudentToGroup={onAddStudentToGroup}
          />
        )
      } else if (onSendStudentBondInvite && onSearchStudent) {
        return (
          <SendBondInviteToStudent
            student={studentToSendInvite}
            onAddStudent={onSendStudentBondInvite}
            onSearchStudent={onSearchStudent}
          />
        )
      }
    }
  }
  return (
    <div className={`student-list ${className}`}>
      <h3>Estudantes</h3>
      {renderButton()}
      {renderStudents() ?? (
        <div className="student-list--no-student-phrase">
          "Parece que não há nenhum estudante ainda!"
        </div>
      )}
    </div>
  )
}
