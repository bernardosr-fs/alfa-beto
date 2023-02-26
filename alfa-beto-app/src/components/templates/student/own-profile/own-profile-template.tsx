import { getAvatarName, getEquippedColorName } from "../../../../utils"
import {
  Avatar,
  Container,
  GoBackButton,
  ExercisesSection,
  MedalsSection,
  Icon,
  StudentNotifications,
} from "../../.."
import {
  PATHS,
  StudentDetailedResponse,
  BondInviteResponse,
} from "../../../../constants"

import "./own-profile-template.scss"

type Props = {
  student: StudentDetailedResponse | undefined
  pendingInvites: Array<BondInviteResponse> | undefined
  onAcceptInvite: (inviteId: number) => Promise<void>
  onRecuseInvite: (inviteId: number) => Promise<void>
}

export const OwnProfileTemplate = ({
  student,
  pendingInvites,
  onAcceptInvite,
  onRecuseInvite,
}: Props) => {
  if (!student) return <></>

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
    <div className={`own-profile own-profile--color--${profile_color}`}>
      <GoBackButton path={PATHS.studentHome} />
      <Container className="own-profile--template">
        <div className="own-information">
          <div className="own-information--name-and-avatar">
            <Avatar name={getAvatarName(equippedCustomizations)} />
            <span>{`${firstName} ${lastName ?? ""}`}</span>
          </div>
          <StudentNotifications
            profileColor={profile_color}
            pendingInvites={pendingInvites}
            onAcceptInvite={onAcceptInvite}
            onRecuseInvite={onRecuseInvite}
          />
        </div>
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
