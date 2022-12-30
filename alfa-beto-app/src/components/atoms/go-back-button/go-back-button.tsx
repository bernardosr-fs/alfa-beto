import { PATHS } from "../../../constants"
import { Icon } from ".."

import "./go-back-button.scss"
import { useNavigate } from "react-router-dom"

type Props = {
  className?: string
  path: PATHS
}

export const GoBackButton = ({ className, path }: Props): JSX.Element => {
  const navigate = useNavigate()
  return (
    <button
      className={`go-back-button ${className}`}
      onClick={() => navigate(path)}
    >
      <Icon name="arrowLeft" />
      Voltar
    </button>
  )
}
