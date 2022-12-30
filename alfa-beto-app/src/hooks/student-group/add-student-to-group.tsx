import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_GROUP_ENDPOINTS,
  AddStudentRequest,
} from "../../constants"
import { useAxios } from ".."

export const useAddStudentToGroup = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: STUDENT_GROUP_ENDPOINTS.ADD_NEW_STUDENT,
  }

  const call = async ({ studentId, groupId }: AddStudentRequest) => {
    axiosParams.data = {
      studentId: studentId,
      groupId: groupId,
    }
    return await fetchData(axiosParams, true)
  }

  return { call }
}
