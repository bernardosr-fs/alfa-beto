import { Container, ResponsibleRegistrationForm } from "../../../index"
import { ResponsibleRegistrationFormProps } from "../../../../constants"

import "./responsible-registration-template.scss"

type Props = {
  onSumbitRegistration: (payload: ResponsibleRegistrationFormProps) => void
}

export const ResponsibleRegistrationTemplate = ({
  onSumbitRegistration,
}: Props) => (
  <div className="responsible-registration-template">
    <Container className="responsible-registration-template__container">
      <ResponsibleRegistrationForm
        onSumbitRegistration={onSumbitRegistration}
      />
    </Container>
  </div>
)
