import { Container, Header, ResponsibleHomeOptions } from "../../../index"

import "./responsible-home-template.scss"

export const ResponsibleHomeTemplate = () => (
  <div className="home-template">
    <Header />
    <Container className="home-template__container">
      <ResponsibleHomeOptions />
    </Container>
  </div>
)
