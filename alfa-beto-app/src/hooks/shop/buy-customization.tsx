import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  CUSTOMIZATIONS_ENDPOINTS,
  HTTP_METHODS,
} from "../../constants"
import { useAxios } from ".."

export const useBuyCustomization = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
  }

  const call = async (id: number) => {
    axiosParams.url = CUSTOMIZATIONS_ENDPOINTS.BUY_CUSTOMIZATION + "/" + id
    return await fetchData(axiosParams, true)
  }

  return { call }
}
