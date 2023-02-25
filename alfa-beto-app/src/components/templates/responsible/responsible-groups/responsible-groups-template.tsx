import {
  ResponsibleGroupList,
  Container,
  CreateNewGroup,
  GoBackButton,
  Header,
} from "../../.."
import {
  StudentGroupResponse,
  RegisterStudentGroupRequest,
  PATHS,
} from "../../../../constants"
import "./responsible-groups-template.scss"

type Props = {
  responsibleGroups: Array<StudentGroupResponse> | undefined
  onSubmitCreateNewGroup: (payload: RegisterStudentGroupRequest) => void
}

export const ResponsibleGroupsTemplate = ({
  responsibleGroups,
  onSubmitCreateNewGroup,
}: Props) => {
  return (
    <div className="responsible-groups-template">
      <Header />
      <GoBackButton path={PATHS.responsibleHome} />
      <Container className="responsible-groups-template__container">
        <CreateNewGroup onSubmitCreateNewGroup={onSubmitCreateNewGroup} />
        <ResponsibleGroupList responsibleGroups={responsibleGroups} />
      </Container>
    </div>
  )
}
