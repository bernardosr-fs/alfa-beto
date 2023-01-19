import { Container, StudentHomeOptions } from "../../../index"

import "./student-home-template.scss"

export const StudentHomeTemplate = () => (
  <div className="home-template">
    <Container className="home-template__container">
      <StudentHomeOptions />
    </Container>
  </div>
)