import axios, { AxiosRequestConfig } from "axios"

export const useAxios = () => {
  const fetchData = async (params: AxiosRequestConfig) => {
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
