import { Container, GoBackButton, ItemsDisplay } from "../../../index"
import {
  CustomizationResponse,
  PATHS,
  StudentDetailedResponse,
} from "../../../../constants"

import "./student-store-template.scss"

type Props = {
  student?: StudentDetailedResponse
  avaibleAvatars?: Array<CustomizationResponse>
  avaibleProfileColors?: Array<CustomizationResponse>
  ownedAvatars?: Array<CustomizationResponse>
  ownedProfileColors?: Array<CustomizationResponse>
  onSubmitBuyCustomization: (id: number) => Promise<void>
  onSubmitEquipCustomization: (id: number) => Promise<void>
}

export const StudentStoreTemplate = ({
  student,
  avaibleAvatars,
  avaibleProfileColors,
  ownedAvatars,
  ownedProfileColors,
  onSubmitBuyCustomization,
  onSubmitEquipCustomization,
}: Props) => (
  <div className="student-store-template">
    <GoBackButton path={PATHS.studentHome} />
    <Container className="student-store-template__container">
      <h1 className="student-store-template--title">LOJA</h1>
      <div className="student-store-template--content">
        <ItemsDisplay
          student={student}
          avaibleAvatars={avaibleAvatars}
          avaibleProfileColors={avaibleProfileColors}
          ownedAvatars={ownedAvatars}
          ownedProfileColors={ownedProfileColors}
          onSubmitBuyCustomization={onSubmitBuyCustomization}
          onSubmitEquipCustomization={onSubmitEquipCustomization}
        />
      </div>
    </Container>
  </div>
)
