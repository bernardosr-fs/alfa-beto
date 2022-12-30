import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormGroup, Modal } from "../../"
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
      <button onClick={() => setMustShowModal(!mustShowModal)}>
        Criar Novo Grupo
      </button>
      <Modal mustShow={mustShowModal} setMustShowModal={setMustShowModal}>
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
          </button>
        </form>
      </Modal>
    </div>
  )
}
