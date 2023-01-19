import { EXERCISE_TYPE, EXERCISE_DIFFICULTY } from "../.."

export type ExerciseResponse = {
    id: number
    name: string
    type: EXERCISE_TYPE
    difficulty: EXERCISE_DIFFICULTY
    rewardCoins: number
    errorsPermitted: number
}