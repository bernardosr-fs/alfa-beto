import "./exercise-progress-card.scss"

type Props = {
  difficulty: string
  numberOfConcludedExercises: number
}

export const ExerciseProgressCard = ({
  difficulty,
  numberOfConcludedExercises,
}: Props) => {
  const renderTitle = () => {
    if (difficulty === "easy") return "Exercícios fáceis"

    if (difficulty === "medium") return "Exercícios médios"

    if (difficulty === "hard") return "Exercícios difíceis"
  }

  return (
    <div className="exercises-progress-card">
      <img
        src={require(`../../../assets/images/difficulties/${difficulty}.png`)}
        alt={`Dificuldade ${difficulty}`}
        className="exercises-progress-card--character"
      />
      <span className={`exercises-progress-card--title ${difficulty}`}>
        {renderTitle()}
      </span>
      <span
        className={`exercises-progress-card--concluded-exercises ${difficulty}`}
      >
        {numberOfConcludedExercises}
      </span>
    </div>
  )
}
