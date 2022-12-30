import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useGetAllBondedResponsibles = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: BOND_ENDPOINTS.GET_ALL_BONDED_RESPONSIBLES,
  }

  const call = async () => {
    return fetchData(axiosParams, true)
  }

  return { call }
}
