import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useDeleteBondFromBondedStudent = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.DELETE,
  }

  const call = async (bondId: number) => {
    axiosParams.url =
      BOND_ENDPOINTS.BASE +
      "/" +
      bondId +
      BOND_ENDPOINTS.DELETE_BOND_FROM_BONDED_STUDENT

    return fetchData(axiosParams)
  }

  return { call }
}
