import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { useState } from "react"

export const useAxios = () => {
  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const response = await axios.request(params)
      return {
        response: response,
        error: null,
      }
    } catch (err: any) {
      return {
        response: null,
        error: err,
      }
    }
  }

  return { fetchData }
}
