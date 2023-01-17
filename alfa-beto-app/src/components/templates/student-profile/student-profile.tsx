import { getAvatarName } from "../../../utils"
import {
  Avatar,
  Container,
  GoBackButton,
  BondedResponsiblesSection,
} from "../.."
import {
  BondedResponsibleResponse,
  PATHS,
  StudentDetailedResponse,
} from "../../../constants"

import "./student-profile.scss"

type Props = {
  student: StudentDetailedResponse
  shouldRenderBondSection: boolean
  responsibles?: Array<BondedResponsibleResponse>
  onRemoveResponsibleBond: (bondId: number) => void
}

export const StudentProfileTemplate = ({
  student,
  shouldRenderBondSection,
  responsibles,
  onRemoveResponsibleBond,
}: Props) => {
  const { firstName, lastName, equippedCustomizations } = student

  return (
    <div className="student-profile">
      <GoBackButton path={PATHS.bondedStudentsFromResponsible} />
      <Container className="student-profile-template">
        <div className="student-information">
          <Avatar name={getAvatarName(equippedCustomizations)} />

          <span>{`${firstName} ${lastName ?? ""}`}</span>
        </div>
        {shouldRenderBondSection && responsibles && (
          <BondedResponsiblesSection
            responsibles={responsibles}
            onRemoveResponsibleBond={onRemoveResponsibleBond}
          />
        )}
      </Container>
    </div>
  )
}
