import {
    ExerciseList,
    Container,
    GoBackButton,
  } from "../../.."
  import {
    ExerciseResponse,
    PATHS,
  } from "../../../../constants"
  import "./exercise-selection-template.scss"
  
  type Props = {
    exerciseList: Array<ExerciseResponse> | undefined
    //onSubmitCreateNewGroup: (payload: RegisterStudentGroupRequest) => void
  }
  
  export const PortExerciseSelectionTemplate = ({
    exerciseList,
    //onSubmitCreateNewGroup,
  }: Props) => {
    return (
      <div className="port-exercise-selection-template">
        <GoBackButton path={PATHS.exerciseTypeSelection} />
        <Container className="port-exercise-selection-template__container">
          <ExerciseList exerciseList={exerciseList} />
        </Container>
      </div>
    )
  }
  