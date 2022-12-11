import { ResponsibleLoginFormProps } from "~/constants/forms"
import { Container, LoginForm } from "../../index"

import "./login-template.scss"

type Props = {
  onSumbitLogin: (payload: ResponsibleLoginFormProps) => void
}

export const LoginTemplate = ({ onSumbitLogin }: Props) => (
  <div className="login-template">
    <Container className="login-template__container">
      <LoginForm onSumbitLogin={onSumbitLogin} />
    </Container>
  </div>
)
