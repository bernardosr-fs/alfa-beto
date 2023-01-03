import { GroupCard } from "../.."
import { StudentDetailedResponse } from "../../../constants"
import "./students-list.scss"

type Props = {
  students: Array<StudentDetailedResponse> | undefined
}

export const StudentsList = ({ students }: Props) => {
  const renderStudents = () => {
    return students?.map((student) => {
      return <p>{student.firstName}</p>
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
