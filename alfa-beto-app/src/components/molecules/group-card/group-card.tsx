import { StudentGroupResponse } from "../../../constants"
import "./group-card.scss"

type Props = {
  responsibleGroup: StudentGroupResponse
}

export const GroupCard = ({ responsibleGroup }: Props) => {
  return (
    <div className="group-card">
      <span className="group-card-name">{responsibleGroup.name}</span>
    </div>
  )
}
