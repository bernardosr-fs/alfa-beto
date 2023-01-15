import { SetStateAction, Dispatch } from "react"
import { useNavigate } from "react-router-dom"
import { Icon } from "../.."
import { PATHS, StudentDetailedResponse } from "../../../constants"

import "./student-accordion.scss"

type Props = {
  index: number
  student: StudentDetailedResponse
  selected: number | null
  setSelected: Dispatch<SetStateAction<number | null>>
  redirectPath?: PATHS
}

export const StudentAccordion = ({
  index,
  student,
  selected,
  setSelected,
  redirectPath,
}: Props) => {
  const navigate = useNavigate()
  const { firstName, lastName, coins, achievedMedals } = student

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }

  const handleCardClick = () => {
    if (redirectPath) {
      navigate(redirectPath, {
        state: student,
      })
    }
  }

  return (
    <div className="student-accordion--item">
      <div className="student-accordion--name" onClick={() => toggle(index)}>
        <span onClick={handleCardClick}>
          {`${firstName} ${lastName ?? ""}`}
        </span>
        <Icon
          name="chevronUp"
          className={
            selected === index
              ? "icon-change-animation--up"
              : "icon-change-animation--down"
          }
        />
      </div>
      <div
        className={`student-accordion--content ${
          selected === index ? "student-accordion--content--show" : ""
        }`}
      >
        <span className="coins">Moedas: {coins}</span>
        <div className="medals">
          Medalhas
          {achievedMedals?.map((medal) => (
            <span key={medal.id}>{medal.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
