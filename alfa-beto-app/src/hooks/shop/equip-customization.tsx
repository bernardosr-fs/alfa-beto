import { AxiosRequestConfig } from "axios"
import {
  BASE_URL,
  CUSTOMIZATIONS_ENDPOINTS,
  HTTP_METHODS,
} from "../../constants"
import { useAxios } from ".."

export const useEquipCustomization = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.PUT,
  }

  const call = async (id: number) => {
    axiosParams.url =
      CUSTOMIZATIONS_ENDPOINTS.BASE +
      "/" +
      id +
      CUSTOMIZATIONS_ENDPOINTS.EQUIP_CUSTOMIZATION
    return await fetchData(axiosParams, true)
  }

  return { call }
}
