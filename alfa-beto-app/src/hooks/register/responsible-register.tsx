import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  REGISTER_ENDPOINTS,
  RegisterResponsibleRequest,
} from "../../constants"
import { useAxios } from ".."

export const usePostResponsibleRegistration = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: REGISTER_ENDPOINTS.RESPONSIBLE,
  }

  const call = async ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    cpf,
    phoneNumber,
  }: RegisterResponsibleRequest) => {
    axiosParams.data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
      cpf: cpf,
      phoneNumber: phoneNumber,
    }
    return await fetchData(axiosParams, false)
  }

  return { call }
}
