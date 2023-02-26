import { EXERCISE_TYPE } from "../.."

export type ExerciseResponse = {
  id: number
  name: string
  type: EXERCISE_TYPE
  difficulty: string
  rewardCoins: number
  errorsPermitted: number
}
