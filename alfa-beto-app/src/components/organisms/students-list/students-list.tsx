import { useState } from "react"
import { GroupCard, StudentAccordion } from "../.."
import { StudentDetailedResponse } from "../../../constants"
import "./students-list.scss"

type Props = {
  students: Array<StudentDetailedResponse> | undefined
}

export const StudentsList = ({ students }: Props) => {
  const [selected, setSelected] = useState<number | null>(null)

  const renderStudents = () => {
    return students?.map((student, index) => {
      return (
        <StudentAccordion
          key={index}
          student={student}
          index={index}
          selected={selected}
          setSelected={setSelected}
        />
      )
    })
  }
  return (
    <div className="student-list">
      <h3>Estudantes</h3>
      {renderStudents() ??
        "Parece que não há nenhum estudante neste grupo ainda!"}
    </div>
  )
}
