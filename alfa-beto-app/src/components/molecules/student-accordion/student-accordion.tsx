import { SetStateAction, Dispatch } from "react"
import { useNavigate } from "react-router-dom"
import { Avatar, Icon, MedalCard, PriceTag } from "../.."
import { PATHS, StudentDetailedResponse } from "../../../constants"
import { getAvatarName } from "../../../utils"

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
  const { firstName, lastName, coins, achievedMedals, equippedCustomizations } =
    student

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
    <div className="student-accordion">
      <div className="student-accordion--item">
        <div className="student-accordion--name" onClick={() => toggle(index)}>
          <div
            className="student-accordion--avatar-and-name"
            onClick={handleCardClick}
          >
            <Avatar
              className="student-accordion--avatar"
              name={getAvatarName(equippedCustomizations)}
            />
            <span>{`${firstName} ${lastName ?? ""}`}</span>
          </div>
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
          <div>
            Moedas:
            <PriceTag
              value={coins}
              className="student-accordion--content--coins"
            />
          </div>
          <div className="student-accordion--content--medals">
            Medalhas:
            <div className="student-accordion--content--medals--display">
              {achievedMedals?.length > 0
                ? achievedMedals?.map((medal) => (
                    <MedalCard
                      key={medal.id}
                      value={medal}
                      className="student-accordion--content--medal-card"
                    />
                  ))
                : "Parece que o estudante ainda não conquistou nenhuma medalha!"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
