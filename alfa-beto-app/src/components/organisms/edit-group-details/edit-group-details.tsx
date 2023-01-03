import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormGroup } from "../../"
import {
  RegisterStudentGroupRequest,
  StudentGroupResponse,
} from "../../../constants"

import "./edit-group-details.scss"

type Props = {
  group: StudentGroupResponse
  onSubmitEditGroupDetails: (payload: RegisterStudentGroupRequest) => void
}

export const EditGroupDetails = ({
  group,
  onSubmitEditGroupDetails,
}: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é necessário"),
    description: Yup.string().required("A descrição é necessária"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterStudentGroupRequest>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: group.name,
      description: group.description,
    },
  })

  return (
    <div className="edit-group-details">
      <form
        onSubmit={handleSubmit(onSubmitEditGroupDetails)}
        autoComplete="off"
        className="edit-group-details--form"
      >
        <FormGroup
          className="edit-group-details--form--name"
          labelClassName="edit-group-details--name--label"
          label=""
          inputType="text"
          register={register}
          registerName="name"
          error={errors.name}
          disableAutoComplete={true}
        />
        <FormGroup
          className="edit-group-details--form--description"
          labelClassName="edit-group-details--description--label"
          label=""
          inputType="text"
          register={register}
          registerName="description"
          error={errors.description}
          disableAutoComplete={true}
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}
