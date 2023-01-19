import { EXERCISE_TYPE, EXERCISE_DIFFICULTY } from "../.."

export type ExerciseAttemptResponse = {
    exerciseId: number
    exerciseName: string
    type: EXERCISE_TYPE
    difficulty: EXERCISE_DIFFICULTY
    rewardCoins: number
    errorsPermitted: number
    exerciseAttemptId: number
}