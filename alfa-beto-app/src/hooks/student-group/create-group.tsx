import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_GROUP_ENDPOINTS,
  RegisterStudentGroupRequest,
} from "../../constants"
import { useAxios } from ".."

export const useCreateGroup = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: STUDENT_GROUP_ENDPOINTS.POST_NEW_GROUP,
  }

  const call = async ({ name, description }: RegisterStudentGroupRequest) => {
    axiosParams.data = {
      name: name,
      description: description,
    }
    return await fetchData(axiosParams, true)
  }

  return { call }
}
