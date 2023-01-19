import React from "react"
import { PATHS } from "../../../../constants"
import { Banner, CardInitialSelection } from "../../../index"
import "./exercise-type-selection-template.scss"

export const ExerciseTypeSelectionTemplate = () => (
  <div className="exercise-type-selection-template">
    <Banner />
    <div className="exercise-type-selection-template__cards">
      <CardInitialSelection
        side={"right"}
        text={"Português"}
        imgNumber={3}
        path={PATHS.responsibleRegistration}
      />
      <CardInitialSelection
        side={"left"}
        text={"Matemática"}
        imgNumber={4}
        path={PATHS.initialSelection}
      />
    </div>
  </div>
)