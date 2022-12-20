import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  REGISTER_ENDPOINTS,
  RegisterStudentRequest,
} from "../../constants"
import { useAxios } from ".."

export const usePostStudentRegistration = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: REGISTER_ENDPOINTS.STUDENT,
  }

  const call = async ({
    userName,
    password,
    confirmPassword,
    firstName,
    lastName,
  }: RegisterStudentRequest) => {
    axiosParams.data = {
      userName: userName,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
    }
    return await fetchData(axiosParams)
  }

  return { call }
}
