import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_GROUP_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useCreateGroup = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: STUDENT_GROUP_ENDPOINTS.POST_NEW_GROUP,
  }

  const call = async () => {
    return await fetchData(axiosParams)
  }

  return { call }
}
