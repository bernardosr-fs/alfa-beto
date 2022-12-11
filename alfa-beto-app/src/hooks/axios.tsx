import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useState } from "react"

export const useAxios = () => {
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

    return { response, error, loading }
  }

  return { fetchData }
}
