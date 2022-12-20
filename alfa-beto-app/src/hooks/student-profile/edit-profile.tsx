import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  STUDENT_PROFILE_ENDPOINTS,
  EditStudentRequest,
} from "../../constants"
import { useAxios } from ".."

export const useEditStudentProfile = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.PUT,
  }

  const call = async (
    studentId: number,
    { password, confirmPassword, firstName, lastName }: EditStudentRequest
  ) => {
    axiosParams.url = STUDENT_PROFILE_ENDPOINTS.BASE + "/" + studentId

    axiosParams.data = {
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
    }

    return await fetchData(axiosParams)
  }

  return { call }
}
