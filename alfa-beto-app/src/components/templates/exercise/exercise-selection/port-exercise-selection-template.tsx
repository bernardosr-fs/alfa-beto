import { ExerciseList, Container, GoBackButton } from "../../.."
import { ExerciseResponse, PATHS } from "../../../../constants"
import "./exercise-selection-template.scss"

type Props = {
  exerciseList: Array<ExerciseResponse> | undefined
}

export const PortExerciseSelectionTemplate = ({ exerciseList }: Props) => {
  return (
    <div className="port-exercise-selection-template">
      <GoBackButton
        className={"go-back-button-exercise"}
        path={PATHS.exerciseTypeSelection}
      />
      <Container className="port-exercise-selection-template__container">
        <ExerciseList exerciseList={exerciseList} />
      </Container>
    </div>
  )
}
