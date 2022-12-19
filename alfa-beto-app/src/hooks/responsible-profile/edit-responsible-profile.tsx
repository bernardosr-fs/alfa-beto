import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  RESPONSIBLE_PROFILE_ENDPOINTS,
} from "../../constants"
import { EditResponsibleRequest } from "../../models"
import { useAxios } from ".."

export const usePutResponsibleProfile = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.PUT,
    url: RESPONSIBLE_PROFILE_ENDPOINTS.EDIT_PROFILE,
  }

  const call = async ({
    password,
    confirmPassword,
    firstName,
    lastName,
    cpf,
    phoneNumber,
  }: EditResponsibleRequest) => {
    axiosParams.data = {
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
      cpf: cpf,
      phoneNumber: phoneNumber,
    }
    return await fetchData(axiosParams)
  }

  return { call }
}
