import { ExerciseCard } from "../../"
import { ExerciseResponse } from "../../../constants"
import "./exercise-list.scss"

type Props = {
  exerciseList: Array<ExerciseResponse> | undefined
}

export const ExerciseList = ({ exerciseList }: Props) => {
  const renderGroups = () => {
    return exerciseList?.map((exercise) => {
      return <ExerciseCard key={exercise.id} exercise={exercise} />
    })
  }
  return (
    <div className="exercise-list">
      {renderGroups() ?? "Parece que não existe nenhum exercício ainda!"}
    </div>
  )
}
