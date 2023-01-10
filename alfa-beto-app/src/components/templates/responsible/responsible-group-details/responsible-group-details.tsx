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
  AddStudentRequest,
} from "../../../../constants"
import "./responsible-group-details.scss"

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
      <GoBackButton path={PATHS.responsibleGroups} />
      <Container className="responsible-group-details-template">
        <EditGroupDetails
          group={group}
          onSubmitEditGroupDetails={onSubmitEditGroupDetails}
        />
        <StudentsList
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
