import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  CUSTOMIZATIONS_ENDPOINTS,
  HTTP_METHODS,
} from "../../constants"
import { useAxios } from ".."

export const useGetOwnedAvatars = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
  }

  const call = async () => {
    axiosParams.url = CUSTOMIZATIONS_ENDPOINTS.OWNED_AVATARS
    return await fetchData(axiosParams, true)
  }

  return { call }
}
