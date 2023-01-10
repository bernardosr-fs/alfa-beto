import { useState } from "react"
import { StudentDetailedResponse, AddStudentRequest } from "../../../constants"
import { Icon } from "../.."

import "./student-add-card.scss"

type Props = {
  groupId: number
  student: StudentDetailedResponse
  onAddStudentToGroup: (payload: AddStudentRequest) => void
}

export const StudentAddCard = ({
  groupId,
  student,
  onAddStudentToGroup,
}: Props) => {
  const { id, firstName, lastName } = student
  const [disabled, setDisabled] = useState(false)

  return (
    <div className="student-add-card">
      <span className="student-add-card--name">
        {`${firstName} ${lastName ?? ""}`}
      </span>
      <button
        onClick={() => {
          onAddStudentToGroup({ studentId: id, groupId })
          setDisabled(true)
        }}
        disabled={disabled}
      >
        <Icon name="userPlus" />
      </button>
    </div>
  )
}
