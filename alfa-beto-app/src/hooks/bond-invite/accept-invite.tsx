import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_INVITE_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useAcceptInvite = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
  }

  const call = async (inviteId: number) => {
    axiosParams.url =
      BOND_INVITE_ENDPOINTS.BASE +
      "/" +
      inviteId +
      BOND_INVITE_ENDPOINTS.ACCEPT_INVITE

    return fetchData(axiosParams, true)
  }

  return { call }
}
