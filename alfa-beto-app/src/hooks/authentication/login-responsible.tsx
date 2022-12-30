import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  LOGIN_ENDPOINTS,
  ResponsibleLoginFormProps,
} from "../../constants"
import { useAxios } from ".."

export const usePostResponsibleAuthentication = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: LOGIN_ENDPOINTS.RESPONSIBLE,
  }

  const call = async ({ email, password }: ResponsibleLoginFormProps) => {
    axiosParams.auth = {
      username: email,
      password: password,
    }

    return fetchData(axiosParams, false)
  }

  return { call }
}
