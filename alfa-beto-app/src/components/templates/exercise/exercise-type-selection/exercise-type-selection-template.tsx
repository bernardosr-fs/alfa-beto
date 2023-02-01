import React from "react"
import { PATHS } from "../../../../constants"
import { Banner, CardInitialSelection, GoBackButton } from "../../../index"
import "./exercise-type-selection-template.scss"

export const ExerciseTypeSelectionTemplate = () => (
  <div className="exercise-type-selection-template">
    <Banner />
    <GoBackButton path={PATHS.studentHome} />
    <div className="exercise-type-selection-template__cards">
      <CardInitialSelection
        side={"right"}
        text={"Português"}
        imgNumber={3}
        path={PATHS.portExerciseSelection}
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
