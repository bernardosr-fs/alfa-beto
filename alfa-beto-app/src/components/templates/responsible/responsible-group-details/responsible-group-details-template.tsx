import {
  Container,
  EditGroupDetails,
  GoBackButton,
  Header,
  StudentsList,
} from "../../.."
import {
  PATHS,
  StudentDetailedResponse,
  StudentGroupResponse,
  RegisterStudentGroupRequest,
  AddStudentRequest,
} from "../../../../constants"
import "./responsible-group-details-template.scss"

type Props = {
  studentsFromGroup: Array<StudentDetailedResponse> | undefined
  studentsAvaibleToAddToGroup: Array<StudentDetailedResponse> | undefined
  group: StudentGroupResponse
  onSubmitEditGroupDetails: (payload: RegisterStudentGroupRequest) => void
  onAddStudentToGroup: (payload: AddStudentRequest) => void
}

export const ResponsibleGroupDetailsTemplate = ({
  studentsFromGroup,
  studentsAvaibleToAddToGroup,
  group,
  onSubmitEditGroupDetails,
  onAddStudentToGroup,
}: Props) => {
  return (
    <div className="responsible-group-details">
      <Header />
      <GoBackButton
        className="responsible-group-details--go-back-button"
        path={PATHS.responsibleGroups}
      />
      <Container className="responsible-group-details-template">
        <EditGroupDetails
          group={group}
          onSubmitEditGroupDetails={onSubmitEditGroupDetails}
        />
        <StudentsList
          className="responsible-group-details--student-list"
          studentsFromGroup={studentsFromGroup}
          studentsAvaibleToAddToGroup={studentsAvaibleToAddToGroup}
          onAddStudentToGroup={onAddStudentToGroup}
          shouldRenderAddStudentButton={true}
          groupId={group.id}
        />
      </Container>
    </div>
  )
}
