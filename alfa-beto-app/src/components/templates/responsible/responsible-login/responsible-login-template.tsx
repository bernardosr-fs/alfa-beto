import { PATHS, ResponsibleLoginFormProps } from "../../../../constants"
import { Container, GoBackButton, ResponsibleLoginForm } from "../../../index"

import "./responsible-login-template.scss"

type Props = {
  onSumbitLogin: (payload: ResponsibleLoginFormProps) => void
}

export const ResponsibleLoginTemplate = ({ onSumbitLogin }: Props) => (
  <div className="login-template">
    <Container className="login-template__container">
      <GoBackButton path={PATHS.initialSelection} />
      <ResponsibleLoginForm onSumbitLogin={onSumbitLogin} />
    </Container>
  </div>
)
