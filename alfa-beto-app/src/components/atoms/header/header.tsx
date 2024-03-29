import { useNavigate } from "react-router-dom"
import { useGetStudentProfile, useLocalStorage } from "../../../hooks"
import { PATHS } from "../../../constants"
import { Container, Icon } from ".."

import "./header.scss"
import { useEffect, useState } from "react"

type Props = {
  className?: string
}

export const Header = ({ className }: Props): JSX.Element => {
  const navigate = useNavigate()
  const localStorage = useLocalStorage()
  const userData = localStorage.get("userData")
  const { firstName, lastName } = JSON.parse(userData ?? "{}")

  return (
    <div className={`header ${className}`}>
      <Container className="header--container">
        <img
          src={require("../../../assets/images/logo.png")}
          alt="logo alfabeto"
          className="header--logo"
        />
        <div className="user-info">
          <span>{`${firstName} ${lastName}`}</span>
          <button onClick={() => navigate("/")}>
            <Icon name="logout" />
          </button>
        </div>
      </Container>
    </div>
  )
}
