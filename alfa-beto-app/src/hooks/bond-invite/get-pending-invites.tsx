import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_INVITE_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useGetAllPendingInvites = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: BOND_INVITE_ENDPOINTS.GET_ALL_PENDING_INVITES,
  }

  const call = async () => {
    return fetchData(axiosParams)
  }

  return { call }
}
