import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_GROUP_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useGetResponsibleGroups = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: STUDENT_GROUP_ENDPOINTS.GET_ALL_GROUPS_FROM_RESPONSIBLE,
  }

  const call = async () => {
    return await fetchData(axiosParams, true)
  }

  return { call }
}
