import React from "react"
import "./banner.scss"

export const Banner = () => {
  return (
    <div className={"banner"}>
      <img
        src={require("../../../assets/images/logo.png")}
        alt="Logotipo alfabeto"
      />
    </div>
  )
}
