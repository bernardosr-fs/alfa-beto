import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(true)

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params)
      setResponse(result)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData(axiosParams)
  }, [])

  return { response, error, loading }
}
