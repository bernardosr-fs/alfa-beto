import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  SEARCH_STUDENT_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useGetSearchStudent = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
  }

  const call = async (username: string) => {
    axiosParams.url = SEARCH_STUDENT_ENDPOINTS.SEARCH_STUDENT + "/" + username
    return await fetchData(axiosParams, true)
  }

  return { call }
}
