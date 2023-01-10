import { useNavigate } from "react-router"
import { PATHS, StudentGroupResponse } from "../../../constants"
import "./group-card.scss"

type Props = {
  responsibleGroup: StudentGroupResponse
}

export const GroupCard = ({ responsibleGroup }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className="group-card"
      onClick={() =>
        navigate(PATHS.groupDetails, {
          state: {
            id: responsibleGroup.id,
            name: responsibleGroup.name,
            description: responsibleGroup.description,
            responsibleFirstName: responsibleGroup.responsibleFirstName,
            responsibleLastName: responsibleGroup.responsibleLastName,
          },
        })
      }
    >
      <span className="group-card-name">{responsibleGroup.name}</span>
    </div>
  )
}
