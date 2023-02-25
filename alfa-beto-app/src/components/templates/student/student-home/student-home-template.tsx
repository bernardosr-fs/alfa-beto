import { Container, Header, StudentHomeOptions } from "../../../index"

import "./student-home-template.scss"

export const StudentHomeTemplate = () => (
  <div className="home-template student-home-template">
    <Header />
    <Container className="home-template__container">
      <StudentHomeOptions />
    </Container>
  </div>
)
