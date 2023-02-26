import { HomeOptionButton } from "../../molecules"
import "./student-home-options.scss"

const options = [
  {
    name: "Exercícios",
    redirectPath: "/exercicio/tipo/selecao",
    icon: "teste1",
  },
  {
    name: "Loja",
    redirectPath: "/loja",
    icon: "teste2",
  },
  {
    name: "Meu Perfil",
    redirectPath: "/meu-perfil",
    icon: "teste3",
  },
]

export const StudentHomeOptions = () => {
  return (
    <div className="student-home-options">
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
