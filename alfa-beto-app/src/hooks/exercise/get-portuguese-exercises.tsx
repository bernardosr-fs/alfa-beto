import { AxiosRequestConfig } from "axios"
import { BASE_URL, EXERCISE_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useGetAllPortugueseExercises = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: EXERCISE_ENDPOINTS.GET_ALL_PORTUGUESE_EXERCISES,
  }

  const call = async () => {
    return fetchData(axiosParams, true)
  }

  return { call }
}