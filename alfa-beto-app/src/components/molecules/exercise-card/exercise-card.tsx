import { useNavigate } from "react-router"
import { PATHS, ExerciseResponse } from "../../../constants"
import "./exercise-card.scss"

type Props = {
  exercise: ExerciseResponse
}

export const ExerciseCard = ({ exercise }: Props) => {
  const navigate = useNavigate()

  const renderTranslatedDifficulty = () => {
    switch (exercise.difficulty) {
      case "EASY": {
        return "FÁCIL"
      }
      case "MEDIUM": {
        return "MÉDIA"
      }
      case "HARD": {
        return "DIFÍCIL"
      }
    }
  }

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
          <span>PRÊMIO:</span>
        </div>
        <div className="exercise-properties-box">
          <span
            className={`exercise-card-att ${exercise.difficulty.toLowerCase()}-att`}
          >
            {renderTranslatedDifficulty()}
          </span>
          <span className="exercise-card-att-errors">
            {exercise.errorsPermitted}
          </span>
          <span className="exercise-card-att-reward">
            {exercise.rewardCoins} MOEDAS
          </span>
        </div>
      </div>
    </div>
  )
}
