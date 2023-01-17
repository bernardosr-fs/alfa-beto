import { useState } from "react"
import {
  StudentDetailedResponse,
  AddStudentRequest,
  StudentResponse,
} from "../../../constants"
import { Icon } from "../.."

import "./student-add-card.scss"

type Props = {
  addType: "group" | "bond"
  groupId?: number
  student: StudentDetailedResponse | StudentResponse
  onAddStudentToGroup?: (payload: AddStudentRequest) => void
  onSendBondInvite?: (id: number) => void
}

export const StudentAddCard = ({
  addType,
  groupId,
  student,
  onAddStudentToGroup,
  onSendBondInvite,
}: Props) => {
  const { id, userName } = student
  const [disabled, setDisabled] = useState(false)

  const handleAddButton = () => {
    if (addType === "group" && groupId && onAddStudentToGroup) {
      onAddStudentToGroup({ studentId: id, groupId })
      setDisabled(true)
    } else if (onSendBondInvite) {
      onSendBondInvite(id)
      setDisabled(true)
    }
  }

  return (
    <div className="student-add-card">
      <span className="student-add-card--name">{userName}</span>
      <button onClick={handleAddButton} disabled={disabled}>
        <Icon name="userPlus" />
      </button>
    </div>
  )
}
