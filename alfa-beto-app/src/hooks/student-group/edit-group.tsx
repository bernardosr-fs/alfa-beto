import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_GROUP_ENDPOINTS,
  RegisterStudentGroupRequest,
} from "../../constants"
import { useAxios } from ".."

export const useEditGroup = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.PUT,
  }

  const call = async (
    groupId: number,
    { name, description }: RegisterStudentGroupRequest
  ) => {
    axiosParams.url = STUDENT_GROUP_ENDPOINTS.EDIT_GROUP + "/" + groupId

    axiosParams.data = {
      name: name,
      description: description,
    }
    return await fetchData(axiosParams)
  }

  return { call }
}
