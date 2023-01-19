import React from "react"
import { PATHS } from "../../../constants"
import { Banner, CardInitialSelection } from "../../index"
import "./initial-selection-template.scss"

export const InitialSelectionTemplate = () => (
  <div className="initial-selection-template">
    <Banner />
    <div className="initial-selection-template__cards">
      <CardInitialSelection
        side={"right"}
        text={"Responsável"}
        imgNumber={1}
        path={PATHS.responsibleLogin}
      />
      <CardInitialSelection
        side={"left"}
        text={"Aluno"}
        imgNumber={2}
        path={PATHS.studentLogin}
      />
    </div>
  </div>
)
