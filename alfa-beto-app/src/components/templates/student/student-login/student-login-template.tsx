import { PATHS, StudentLoginFormProps } from "../../../../constants"
import { Container, GoBackButton, StudentLoginForm } from "../../../index"

import "./student-login-template.scss"

type Props = {
  onSumbitLogin: (payload: StudentLoginFormProps) => void
}

export const StudentLoginTemplate = ({ onSumbitLogin }: Props) => (
  <div className="login-template">
    <Container className="login-template__container">
      <GoBackButton path={PATHS.initialSelection} />
      <StudentLoginForm onSumbitLogin={onSumbitLogin} />
    </Container>
  </div>
)
