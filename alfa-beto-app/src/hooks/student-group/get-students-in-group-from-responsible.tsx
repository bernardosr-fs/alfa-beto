import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_GROUP_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useGetStudentsInGroupFromResponsible = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
  }

  const call = async (groupId: number) => {
    axiosParams.url =
      STUDENT_GROUP_ENDPOINTS.BASE_RESPONSIBLE +
      "/" +
      groupId +
      STUDENT_GROUP_ENDPOINTS.GET_ALL_STUDENTS_FROM_GROUP

    return await fetchData(axiosParams)
  }

  return { call }
}
