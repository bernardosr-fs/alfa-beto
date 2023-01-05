import { SetStateAction, Dispatch } from "react"
import { Icon } from "../.."
import { StudentDetailedResponse } from "../../../constants"

import "./student-accordion.scss"

type Props = {
  index: number
  student: StudentDetailedResponse
  selected: number | null
  setSelected: Dispatch<SetStateAction<number | null>>
}

export const StudentAccordion = ({
  index,
  student,
  selected,
  setSelected,
}: Props) => {
  const { id, userName, firstName, lastName, coins, firstBond } = student

  const toggle = (index: number) => {
    if (selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }

  return (
    <div className="student-accordion--item">
      <div className="student-accordion--name" onClick={() => toggle(index)}>
        {`${firstName} ${lastName ? lastName : ""}`}
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
        <span>Moedas: {coins}</span>
      </div>
    </div>
  )
}
