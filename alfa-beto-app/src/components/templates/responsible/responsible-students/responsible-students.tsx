import { Container, GoBackButton, StudentsList } from "../../.."
import {
  PATHS,
  StudentDetailedResponse,
  SearchStudentRequest,
  StudentResponse,
} from "../../../../constants"

import "./responsible-students.scss"

type Props = {
  students: Array<StudentDetailedResponse> | undefined
  searchedStudent?: StudentResponse
  onSendStudentBondInvite: (studentId: number) => void
  onSearchStudent: (payload: SearchStudentRequest) => void
}

export const ResponsibleStudentsTemplate = ({
  students,
  searchedStudent,
  onSendStudentBondInvite,
  onSearchStudent,
}: Props) => {
  return (
    <div className="responsible-students">
      <GoBackButton path={PATHS.responsibleHome} />
      <Container className="responsible-students-template">
        <StudentsList
          studentToSendInvite={searchedStudent}
          studentsFromGroup={students}
          shouldRenderAddStudentButton={true}
          onSendStudentBondInvite={onSendStudentBondInvite}
          onSearchStudent={onSearchStudent}
        />
      </Container>
    </div>
  )
}
