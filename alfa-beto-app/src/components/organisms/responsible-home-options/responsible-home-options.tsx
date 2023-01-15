import { HomeOptionButton } from "../../molecules"
import "./responsible-home-options.scss"

const options = [
  {
    name: "Grupos",
    redirectPath: "/responsavel/grupos",
    icon: "teste",
  },
  {
    name: "Estudantes",
    redirectPath: "/responsavel/estudantes-vinculados",
    icon: "teste2",
  },
]

export const ResponsibleHomeOptions = () => {
  return (
    <div className="responsible-home-options">
      {options.map((option, index) => (
        <HomeOptionButton
          key={index}
          name={option.name}
          redirectPath={option.redirectPath}
          icon={option.icon}
        />
      ))}
    </div>
  )
}
