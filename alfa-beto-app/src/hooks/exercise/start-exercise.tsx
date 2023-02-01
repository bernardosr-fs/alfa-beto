import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  HTTP_METHODS,
  EXERCISE_ENDPOINTS,
} from "../../constants"
import { useAxios } from ".."

export const useStartExercise = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
  }

  const call = async (exerciseId: number) => {
    axiosParams.url =
      EXERCISE_ENDPOINTS.BASE +
      "/" +
      exerciseId +
      EXERCISE_ENDPOINTS.START_EXERCISE

    return await fetchData(axiosParams, true)
  }

  return { call }
}