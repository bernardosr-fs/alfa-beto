import { Icon } from "../icon/icon"

import "./exercise-start-button.scss"

type Props = {
  exerciseId: number
  onStartExercise: (exerciseId: number) => void
}

export const ExerciseStartButton = ({ exerciseId, onStartExercise }: Props) => {
  return (
    <div
      className="exercise-start-button-component"
      onClick={() => onStartExercise(exerciseId)}
    >
      <span>INICIAR EXERCÍCIO</span>
      <button className="exercise-start-button">
        <Icon className="exercise-start-play-circle" name="playCircle" />
      </button>
    </div>
  )
}
