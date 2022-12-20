import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_INVITE_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useRecuseInvite = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.PUT,
  }

  const call = async (inviteId: number) => {
    axiosParams.url =
      BOND_INVITE_ENDPOINTS.BASE +
      "/" +
      inviteId +
      BOND_INVITE_ENDPOINTS.RECUSE_INVITE

    return fetchData(axiosParams)
  }

  return { call }
}
