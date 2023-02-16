import { AxiosRequestConfig } from "axios"
import { BASE_URL, HTTP_METHODS, EXERCISE_ENDPOINTS } from "../../constants"
import { useAxios } from ".."

export const useFailExercise = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.PUT,
  }

  const call = async (attemptId: number) => {
    axiosParams.url =
      EXERCISE_ENDPOINTS.BASE_ATTEMPT +
      "/" +
      attemptId +
      EXERCISE_ENDPOINTS.FAIL_EXERCISE

    return await fetchData(axiosParams, true)
  }

  return { call }
}
