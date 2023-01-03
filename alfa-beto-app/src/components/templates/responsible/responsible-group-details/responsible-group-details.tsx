import {
  Container,
  EditGroupDetails,
  GoBackButton,
  StudentsList,
} from "../../.."
import {
  PATHS,
  StudentDetailedResponse,
  StudentGroupResponse,
  RegisterStudentGroupRequest,
} from "../../../../constants"
import "./responsible-group-details.scss"

type Props = {
  students: Array<StudentDetailedResponse> | undefined
  group: StudentGroupResponse
  onSubmitEditGroupDetails: (payload: RegisterStudentGroupRequest) => void
}

export const ResponsibleGroupDetailsTemplate = ({
  students,
  group,
  onSubmitEditGroupDetails,
}: Props) => {
  return (
    <div className="responsible-group-details">
      <GoBackButton path={PATHS.responsibleGroups} />
      <Container className="responsible-group-details-template">
        <EditGroupDetails
          group={group}
          onSubmitEditGroupDetails={onSubmitEditGroupDetails}
        />
        <StudentsList students={students} />
      </Container>
    </div>
  )
}
