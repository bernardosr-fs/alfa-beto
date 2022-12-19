import { AxiosRequestConfig } from "axios"
import { BASE_URL, BOND_ENDPOINTS, HTTP_METHODS } from "../../constants"
import { useAxios } from ".."

export const useGetAllBondedStudents = () => {
  const { fetchData } = useAxios()

  const axiosParams: AxiosRequestConfig = {
    baseURL: BASE_URL.BASE,
    method: HTTP_METHODS.GET,
    url: BOND_ENDPOINTS.GET_ALL_BONDED_STUDENTS,
  }

  const call = async () => {
    return fetchData(axiosParams)
  }

  return { call }
}
