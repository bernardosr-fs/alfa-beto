import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormGroup, Icon, Modal } from "../../"
import { RegisterStudentGroupRequest } from "../../../constants"

import "./create-new-group.scss"
import { useState } from "react"

type Props = {
  onSubmitCreateNewGroup: (payload: RegisterStudentGroupRequest) => void
}

export const CreateNewGroup = ({ onSubmitCreateNewGroup }: Props) => {
  const [mustShowModal, setMustShowModal] = useState(false)

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
  })

  return (
    <div className="create-new-group">
      <button
        className="create-new-group--create-button"
        onClick={() => setMustShowModal(!mustShowModal)}
      >
        Criar Grupo
        <Icon name="plusCircle" />
      </button>
      <Modal
        className="create-new-group--modal"
        mustShow={mustShowModal}
        setMustShowModal={setMustShowModal}
      >
        <form
          onSubmit={handleSubmit(onSubmitCreateNewGroup)}
          autoComplete="off"
        >
          <FormGroup
            label="Nome"
            inputType="text"
            register={register}
            registerName="name"
            error={errors.name}
            disableAutoComplete={true}
          />
          <FormGroup
            label="Descrição"
            inputType="text"
            register={register}
            registerName="description"
            error={errors.description}
            disableAutoComplete={true}
          />
          <button
            type="submit"
            onClick={() =>
              setTimeout(() => {
                setMustShowModal(!mustShowModal)
              }, 1000)
            }
          >
            Criar
            <Icon name="plusCircle" />
          </button>
        </form>
      </Modal>
    </div>
  )
}
