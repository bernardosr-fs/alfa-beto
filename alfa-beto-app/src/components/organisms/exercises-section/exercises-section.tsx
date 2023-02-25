import { ExerciseProgressCard } from "../.."
import "./exercises-section.scss"

type Props = {
  profileColor: string
  easyExercisesDone: number
  mediumExercisesDone: number
  hardExercisesDone: number
}

export const ExercisesSection = ({
  profileColor,
  easyExercisesDone,
  mediumExercisesDone,
  hardExercisesDone,
}: Props) => {
  const difficultiesData = [
    {
      id: 1,
      difficulty: "easy",
      numberOfConcludedExercises: easyExercisesDone,
    },
    {
      id: 2,
      difficulty: "medium",
      numberOfConcludedExercises: mediumExercisesDone,
    },
    {
      id: 3,
      difficulty: "hard",
      numberOfConcludedExercises: hardExercisesDone,
    },
  ]
  const renderCards = () => {
    return difficultiesData.map((difficultyData) => {
      return (
        <ExerciseProgressCard
          key={difficultyData.id}
          difficulty={difficultyData.difficulty}
          numberOfConcludedExercises={difficultyData.numberOfConcludedExercises}
        />
      )
    })
  }
  return (
    <>
      <h3 className="section-title">Exercícios</h3>
      <section className={`exercises-section section-color--${profileColor}`}>
        {renderCards()}
      </section>
    </>
  )
}
