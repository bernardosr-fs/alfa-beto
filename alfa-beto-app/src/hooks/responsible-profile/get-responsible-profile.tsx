import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  RESPONSIBLE_PROFILE_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useGetResponsibleProfile = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: RESPONSIBLE_PROFILE_ENDPOINTS.GET_PROFILE,
  }

  const call = async () => {
    return await fetchData(axiosParams)
  }

  return { call }
}
