import { StudentProfileTemplate } from "../../components"

import { useLocation } from "react-router-dom"

export const StudentProfile = () => {
  const location = useLocation()
  const student = location.state

  return <StudentProfileTemplate student={student} />
}
