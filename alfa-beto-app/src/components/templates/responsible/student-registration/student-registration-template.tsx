import {
  Container,
  GoBackButton,
  StudentRegistrationForm,
} from "../../../index"
import { PATHS, RegisterStudentRequest } from "../../../../constants"

import "./student-registration-template.scss"

type Props = {
  onSumbitRegistration: (payload: RegisterStudentRequest) => void
}

export const StudentRegistrationTemplate = ({
  onSumbitRegistration,
}: Props) => (
  <div className="responsible-registration-template">
    <Container className="responsible-registration-template__container">
      <GoBackButton path={PATHS.bondedStudentsFromResponsible} />
      <StudentRegistrationForm onSumbitRegistration={onSumbitRegistration} />
    </Container>
  </div>
)
