import {
  Container,
  GoBackButton,
  ResponsibleRegistrationForm,
} from "../../../index"
import { PATHS, RegisterResponsibleRequest } from "../../../../constants"

import "./responsible-registration-template.scss"

type Props = {
  onSumbitRegistration: (payload: RegisterResponsibleRequest) => void
}

export const ResponsibleRegistrationTemplate = ({
  onSumbitRegistration,
}: Props) => (
  <div className="responsible-registration-template">
    <Container className="responsible-registration-template__container">
      <GoBackButton path={PATHS.responsibleLogin} />
      <ResponsibleRegistrationForm
        onSumbitRegistration={onSumbitRegistration}
      />
    </Container>
  </div>
)
