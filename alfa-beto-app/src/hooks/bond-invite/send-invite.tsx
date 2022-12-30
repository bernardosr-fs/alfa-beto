import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_INVITE_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useSendInvite = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.POST,
  }

  const call = async (studentId: number) => {
    axiosParams.url =
      BOND_INVITE_ENDPOINTS.GET_ALL_PENDING_INVITES + "/" + studentId

    return fetchData(axiosParams, true)
  }

  return { call }
}
