import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  LOGIN_ENDPOINTS,
  StudentLoginFormProps,
} from "../../constants"
import { useAxios } from ".."

export const usePostAuthentication = () => {
  //const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
    url: LOGIN_ENDPOINTS.STUDENT,
  }

  const call = async ({ username, password }: StudentLoginFormProps) => {
    axiosParams.auth = {
      username: username,
      password: password,
    }
    //const { response, error, loading } = await fetchData(axiosParams)
    //console.log(response, error, loading)

    //return { response, error, loading }
  }

  return { call }
}
