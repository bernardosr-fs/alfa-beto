import { useStartExercise } from "../../../hooks"
import { ExerciseStartTemplate, showToast } from "../../../components"
import { useEffect, useState } from "react"
import { PATHS } from "../../../constants"
import { useLocation, useNavigate } from "react-router-dom"

export const ExerciseStart = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const startExercise = useStartExercise()

  const { id } = location.state
  const exerciseId = id

  const getExercisePath = () => {
    if (exerciseId <= 3) {
      return PATHS.memoryGame
    } else {
      return PATHS.initialSelection
    }
  }

  const onStartExercise = async (exerciseId: number) => {
    const { call } = startExercise

    const { response, error } = await call(exerciseId)

    if (response && !error) {
      navigate(getExercisePath(), {
        state: {
          exerciseId: response?.data.exerciseId,
          exerciseName: response?.data.name,
          type: response?.data.type,
          difficulty: response?.data.difficulty,
          rewardCoins: response?.data.rewardCoins,
          errorsPermitted: response?.data.errorsPermitted,
          exerciseAttemptId: response?.data.exerciseAttemptId,
        },
      })
    } else {
      showToast("error", "Erro ao iniciar exercício.", "error")
    }
  }

  return (
    <ExerciseStartTemplate
      exerciseId={exerciseId}
      onStartExercise={onStartExercise}
    />
  )
}
