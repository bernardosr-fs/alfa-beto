import { Container, GoBackButton, StudentsList } from "../.."
import {
  PATHS,
  StudentDetailedResponse,
  SearchStudentRequest,
  StudentResponse,
} from "../../../constants"

import "./student-profile.scss"

type Props = {
  student: StudentDetailedResponse
}

export const StudentProfileTemplate = ({ student }: Props) => {
  return (
    <div className="student-profile">
      <GoBackButton path={PATHS.responsibleHome} />
      <Container className="responsible-students-template">
        <></>
      </Container>
    </div>
  )
}
