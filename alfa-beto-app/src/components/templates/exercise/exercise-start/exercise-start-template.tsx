import React from "react"
import { PATHS } from "../../../../constants"
import {
  Banner,
  CardInitialSelection,
  ExerciseTutorialVideoCard,
  GoBackButton,
  ExerciseStartButton,
} from "../../../index"
import "./exercise-start-template.scss"

type Props = {
  exerciseId: number
  onStartExercise: (exerciseId: number) => void
}

export const ExerciseStartTemplate = ({
  exerciseId,
  onStartExercise,
}: Props) => (
  <div className="exercise-start-template">
    <GoBackButton
      className={"go-back-button-exercise"}
      path={PATHS.portExerciseSelection}
    />
    <ExerciseTutorialVideoCard exerciseId={exerciseId} />
    <ExerciseStartButton
      exerciseId={exerciseId}
      onStartExercise={onStartExercise}
    />
  </div>
)
