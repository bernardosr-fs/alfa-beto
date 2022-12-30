import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useGetAllBondsFromBondedStudent = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
  }

  const call = async (studentId: number) => {
    axiosParams.url =
      BOND_ENDPOINTS.BASE +
      "/" +
      studentId +
      BOND_ENDPOINTS.GET_ALL_BONDS_FROM_BONDED_STUDENT

    return fetchData(axiosParams, true)
  }

  return { call }
}
