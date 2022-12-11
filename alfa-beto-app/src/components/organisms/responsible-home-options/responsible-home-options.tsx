import { HomeOptionButton } from "../../molecules"
import "./responsible-home-options.scss"

const options = [
  {
    name: "Grupos",
    redirectPath: "/grupos",
    icon: "teste",
  },
  {
    name: "Estudantes",
    redirectPath: "/estudantes",
    icon: "teste2",
  },
]

export const ResponsibleHomeOptions = () => {
  return (
    <div className="responsible-home-options">
      {options.map((option) => (
        <HomeOptionButton
          name={option.name}
          redirectPath={option.redirectPath}
          icon={option.icon}
        />
      ))}
    </div>
  )
}
