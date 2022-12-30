export const useLocalStorage = () => {
  const getHeader = (response, key) => {
    return response.headers.get(key)
  }

  const save = (key, value) => {
    localStorage.setItem(key, value)
  }

  const get = (key) => {
    return localStorage.getItem(key)
  }

  return { save, get, getHeader }
}
