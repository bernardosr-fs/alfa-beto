import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_PROFILE_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useGetStudentProfile = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: STUDENT_PROFILE_ENDPOINTS.GET_PROFILE,
  }

  const call = async () => {
    return await fetchData(axiosParams, true)
  }

  return { call }
}
