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
    if (imgNumber === 1) {
      return (
        <img
          src={require(`../../../assets/images/characters/responsible-1.png`)}
          alt={"Responável"}
        />
      )
    } else {
      return (
        <img
          src={require(`../../../assets/images/characters/student-1.png`)}
          alt={"Estudante"}
          className="student-image"
        />
      )
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
