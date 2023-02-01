import {
  useBuyCustomization,
  useEquipCustomization,
  useGetOwnedAvatars,
  useGetOwnedProfileColors,
  useGetShopAvatars,
  useGetShopProfileColors,
  useGetStudentProfile,
} from "../../../hooks"
import { showToast, StudentStoreTemplate } from "../../../components"
import {
  CustomizationResponse,
  StudentDetailedResponse,
} from "../../../constants"
import { useEffect, useState } from "react"

export const StudentStore = () => {
  const getStudentProfile = useGetStudentProfile()
  const getShopAvatars = useGetShopAvatars()
  const getProfileColors = useGetShopProfileColors()
  const getOwnedAvatars = useGetOwnedAvatars()
  const getOwnedProfileColors = useGetOwnedProfileColors()
  const buyCustomization = useBuyCustomization()
  const equipCustomization = useEquipCustomization()

  const [student, setStudent] = useState<StudentDetailedResponse>()
  const [avaibleAvatars, setAvaibleAvatars] =
    useState<Array<CustomizationResponse>>()
  const [avaibleProfileColors, setAvaibleProfileColors] =
    useState<Array<CustomizationResponse>>()
  const [ownedAvatars, setOwnedAvatars] =
    useState<Array<CustomizationResponse>>()
  const [ownedProfileColors, setOwnedProfileColors] =
    useState<Array<CustomizationResponse>>()
  const [boughtItem, setBoughtItem] = useState<boolean>(false)

  useEffect(() => {
    const callGetStudentDetails = async () => {
      const { call } = getStudentProfile
      const { response, error } = await call()
      if (response && !error) {
        setStudent(response?.data)
      } else {
        showToast("error", "Erro ao buscar detalhes do estudante", "error")
      }
    }
    callGetStudentDetails()
  }, [boughtItem])

  useEffect(() => {
    const callGetShopAvatars = async () => {
      const { call } = getShopAvatars
      const { response, error } = await call()
      if (response && !error) {
        setAvaibleAvatars(response?.data)
      } else {
        showToast("error", "Erro ao buscar avatares", "error")
      }
    }
    callGetShopAvatars()
  }, [boughtItem])

  useEffect(() => {
    const callGetShopProfileColors = async () => {
      const { call } = getProfileColors
      const { response, error } = await call()
      if (response && !error) {
        setAvaibleProfileColors(response?.data)
      } else {
        showToast("error", "Erro ao buscar cores de perfil", "error")
      }
    }
    callGetShopProfileColors()
  }, [boughtItem])

  useEffect(() => {
    const callGetOwnedAvatars = async () => {
      const { call } = getOwnedAvatars
      const { response, error } = await call()
      if (response && !error) {
        setOwnedAvatars(response?.data)
      } else {
        showToast("error", "Erro ao buscar avatares possuídos", "error")
      }
    }
    callGetOwnedAvatars()
  }, [boughtItem])

  useEffect(() => {
    const callGetOwnedProfileColors = async () => {
      const { call } = getOwnedProfileColors
      const { response, error } = await call()
      if (response && !error) {
        setOwnedProfileColors(response?.data)
      } else {
        showToast("error", "Erro ao buscar cores de perfil possuídas", "error")
      }
    }
    callGetOwnedProfileColors()
  }, [boughtItem])

  const onSubmitBuyCustomization = async (id: number) => {
    const { call } = buyCustomization
    const { response, error } = await call(id)

    if (response && !error) {
      showToast("success", "Compra realizada com sucesso!", "check")
      setBoughtItem(!boughtItem)
    } else {
      showToast(
        "error",
        error.response.data.message ?? "Erro ao comprar item!",
        "error"
      )
    }
  }

  const onSubmitEquipCustomization = async (id: number) => {
    const { call } = equipCustomization

    const { response, error } = await call(id)

    if (response && !error) {
      showToast("success", "Item equipado com sucesso!", "check")
    } else {
      showToast("error", "Erro ao equipar item", "error")
    }
  }

  return (
    <StudentStoreTemplate
      student={student}
      avaibleAvatars={avaibleAvatars}
      avaibleProfileColors={avaibleProfileColors}
      ownedAvatars={ownedAvatars}
      ownedProfileColors={ownedProfileColors}
      onSubmitBuyCustomization={onSubmitBuyCustomization}
      onSubmitEquipCustomization={onSubmitEquipCustomization}
    />
  )
}
