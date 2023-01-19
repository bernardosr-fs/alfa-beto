import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PATHS } from "../../../constants"
import "./not-found-template.scss"

export const NotFoundTemplate = () => {
  const [countDown, setCountDown] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => setCountDown(countDown - 1), 1000)
    } else {
      navigate(PATHS.initialSelection)
    }
  }, [countDown, navigate])

  return (
    <div className="not-found">
      <span className="not-found__title">Parece que não há nada aqui!</span>
      <span className="not-found__description">
        Vamos te mandar para um lugar seguro em {countDown}
      </span>
    </div>
  )
}
