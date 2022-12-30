import { GroupCard } from "../../"
import { StudentGroupResponse } from "../../../constants"
import "./responsible-group-list.scss"

type Props = {
  responsibleGroups: Array<StudentGroupResponse> | undefined
}

export const ResponsibleGroupList = ({ responsibleGroups }: Props) => {
  const renderGroups = () => {
    return responsibleGroups?.map((responsibleGroup) => {
      return (
        <GroupCard
          key={responsibleGroup.id}
          responsibleGroup={responsibleGroup}
        />
      )
    })
  }
  return (
    <div className="responsible-group-list">
      {renderGroups() ?? "Parece que você não tem nenhum grupo ainda!"}
    </div>
  )
}
