import { useNavigate } from "react-router-dom"

import "./home-option-button.scss"

type Props = {
  name: string
  redirectPath: string
  icon: string
}

export const HomeOptionButton = ({ name, redirectPath, icon }: Props) => {
  const navigate = useNavigate()
  return (
    <div className="home-option-button" onClick={() => navigate(redirectPath)}>
      {name}
    </div>
  )
}
