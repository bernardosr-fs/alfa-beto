import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import "./not-found-template.scss"

export const NotFoundTemplate = () => {
  const [countDown, setCountDown] = useState(5)
  const [redirectNow, setRedirectNow] = useState(false)
  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => setCountDown(countDown - 1), 1000)
    } else {
      setRedirectNow(true)
    }
  }, [countDown])

  return (
    <div className="not-found">
      <span className="not-found__title">Parece que não há nada aqui!</span>
      <span className="not-found__description">
        Vamos te mandar para um lugar seguro em {countDown}
      </span>
      {redirectNow && <Navigate to="/" replace />}
    </div>
  )
}
