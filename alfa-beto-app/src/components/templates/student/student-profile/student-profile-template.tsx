import { getAvatarName, getEquippedColorName } from "../../../../utils"
import {
  Avatar,
  Container,
  GoBackButton,
  BondedResponsiblesSection,
  ExercisesSection,
  MedalsSection,
} from "../../.."
import {
  BondedResponsibleResponse,
  PATHS,
  StudentDetailedResponse,
} from "../../../../constants"

import "./student-profile-template.scss"

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
  const {
    firstName,
    lastName,
    equippedCustomizations,
    easyExercisesDone,
    mediumExercisesDone,
    hardExercisesDone,
    achievedMedals,
  } = student

  const profile_color = getEquippedColorName(equippedCustomizations)
  return (
    <div className={`student-profile student-profile--color--${profile_color}`}>
      <GoBackButton path={PATHS.bondedStudentsFromResponsible} />
      <Container className="student-profile--template">
        <div className="student-information">
          <Avatar name={getAvatarName(equippedCustomizations)} />
          <span>{`${firstName} ${lastName ?? ""}`}</span>
        </div>
        {shouldRenderBondSection && responsibles && (
          <BondedResponsiblesSection
            profileColor={profile_color}
            responsibles={responsibles}
            onRemoveResponsibleBond={onRemoveResponsibleBond}
          />
        )}
        <ExercisesSection
          profileColor={profile_color}
          easyExercisesDone={easyExercisesDone}
          mediumExercisesDone={mediumExercisesDone}
          hardExercisesDone={hardExercisesDone}
        />
        <MedalsSection profileColor={profile_color} medals={achievedMedals} />
      </Container>
    </div>
  )
}
