import { Navigate } from "react-router-dom"
import { useLocalStorage } from "../hooks"
import { PATHS } from "../constants"

type Props = {
  children: JSX.Element
}
export const ProtectedRoute = ({ children }: Props) => {
  const localStorage = useLocalStorage()
  const token = localStorage.get("token")

  if (!token) {
    return <Navigate to={PATHS.initialSelection} />
  }

  return children
}
