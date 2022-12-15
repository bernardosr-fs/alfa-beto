import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useAxios = () => {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(false)

  const fetchData = async (params: AxiosRequestConfig) => {
    setResponse(undefined)
    setError(undefined)
    setLoading(false)

    await axios
      .request(params)
      .then((response) => setResponse(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))

    return { response, error, loading }
  }

  return { response, error, loading, fetchData }
}
