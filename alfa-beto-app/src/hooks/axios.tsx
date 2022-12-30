import axios, { AxiosRequestConfig } from "axios"
import { useLocalStorage } from "."

export const useAxios = () => {
  const localStorage = useLocalStorage()
  const fetchData = async (
    params: AxiosRequestConfig,
    useAuthentication: boolean
  ) => {
    if (useAuthentication) {
      params.headers = { "X-Auth-Token": localStorage.get("token") }
    }

    try {
      const response = await axios.request(params)
      return {
        response: response,
        error: null,
      }
    } catch (err: any) {
      return {
        response: null,
        error: err,
      }
    }
  }

  return { fetchData }
}
