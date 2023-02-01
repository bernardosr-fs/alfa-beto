import { useNavigate } from "react-router"
import { PATHS, ExerciseResponse } from "../../../constants"
import "./exercise-card.scss"

type Props = {
  exercise: ExerciseResponse
}

export const ExerciseCard = ({ exercise }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className="exercise-card"
      onClick={() =>
        navigate(PATHS.startingExercise, {
          state: {
            id: exercise.id,
          },
        })
      }
    >
      <span className="exercise-card-name">{exercise.name}</span>
      <div className="exercise-info-box">
        <div className="exercise-name-properties-box">
          <span>DIFICULDADE:</span>
          <span>ERROS PERMITIDOS:</span>
          <span>RECOMPENSA DE MOEDAS:</span>
        </div>
        <div className="exercise-properties-box">
          <span className="exercise-card-att">{exercise.difficulty}</span>
          <span className="exercise-card-att">{exercise.errorsPermitted}</span>
          <span className="exercise-card-att">{exercise.rewardCoins}</span>
        </div>
      </div>
    </div>
  )
}
