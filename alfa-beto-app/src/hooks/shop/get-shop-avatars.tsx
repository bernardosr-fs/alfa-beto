import { AxiosRequestConfig } from "axios"
import { BASE_URL, HTTP_METHODS, SHOP_ENDPOINTS } from "../../constants"
import { useAxios } from ".."

export const useGetShopAvatars = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
  }

  const call = async () => {
    axiosParams.url = SHOP_ENDPOINTS.SHOP_AVATARS
    return await fetchData(axiosParams, true)
  }

  return { call }
}
