import { MemoryGameTemplate, showToast } from "../../../components"
import { useFinishExercise, useFailExercise } from "../../../hooks"
import { PATHS } from "../../../constants"
import { useLocation, useNavigate } from "react-router-dom"

export const MemoryGame = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const finishExercise = useFinishExercise()
  const failExercise = useFailExercise()

  const {
    exerciseId,
    exerciseName,
    type,
    difficulty,
    rewardCoins,
    errorsPermitted,
    exerciseAttemptId,
  } = location.state

  const exerciseInfo = {
    exerciseId,
    exerciseName,
    type,
    difficulty,
    rewardCoins,
    errorsPermitted,
    exerciseAttemptId,
  }

  const onFinishExercise = async () => {
    const { call } = finishExercise

    const { response, error } = await call(exerciseInfo.exerciseAttemptId)

    if (!response && error) {
      showToast("error", "Erro ao finalizar exercício.", "error")
    }
  }

  const onFailExercise = async () => {
    const { call } = failExercise

    const { response, error } = await call(exerciseInfo.exerciseAttemptId)

    if (!response && error) {
      showToast("error", "Erro ao falhar exercício.", "error")
    }
  }

  return (
    <MemoryGameTemplate
      exercise={exerciseInfo}
      onFinishExercise={onFinishExercise}
      onFailExercise={onFailExercise}
    />
  )
}
