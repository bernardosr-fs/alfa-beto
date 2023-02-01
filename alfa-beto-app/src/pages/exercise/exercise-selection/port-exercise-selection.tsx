import { useGetAllPortugueseExercises } from "../../../hooks"
import { PortExerciseSelectionTemplate, showToast } from "../../../components"
import { useEffect, useState } from "react"
import { ExerciseResponse } from "../../../constants"

export const PortExerciseSelection = () => {
  const getPortugueseExercises = useGetAllPortugueseExercises()

  const [portugueseExercises, setPortugueseExercises] =
    useState<Array<ExerciseResponse>>()

  useEffect(() => {
    const callGetAllPortugueseExercises = async () => {
      const { call } = getPortugueseExercises
      const { response, error } = await call()

      if (response && !error) {
        setPortugueseExercises(response?.data)
      }
    }
    callGetAllPortugueseExercises()
  }, [])

  return <PortExerciseSelectionTemplate exerciseList={portugueseExercises} />
}
