import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { PATHS } from "../../../constants"
import "./card-initial-selection.scss"

type Props = {
  side: string
  text: string
  imgNumber: number
  path: PATHS
}

export const CardInitialSelection = ({
  side,
  text,
  imgNumber,
  path,
}: Props) => {
  const [redirectNow, setRedirectNow] = useState(false)
  const renderImage = () => {
    switch (imgNumber) {
      case 1: {
        return (
          <img
            src={require(`../../../assets/images/exercise/type/portuguese-1.png`)}
            alt={"Português"}
          />
        )
      }
      case 2: {
        return (
          <img
            src={require(`../../../assets/images/exercise/type/math-1.png`)}
            alt={"Matemática"}
          />
        )
      }
    }
  }

  return (
    <div
      className={`card-selection card-selection__${side}`}
      onClick={() => setRedirectNow(true)}
    >
      {renderImage()}
      <span>{text}</span>
      {redirectNow && <Navigate to={path} replace />}
    </div>
  )
}
