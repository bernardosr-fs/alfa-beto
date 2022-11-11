import React from "react"
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

  const redirectToPage = () => {}

  return (
    <div className={`card-selection card-selection__${side}`}>
      {renderImage()}
      <span>{text}</span>
    </div>
  )
}
