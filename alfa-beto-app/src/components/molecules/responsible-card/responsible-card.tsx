import { useState } from "react"
import { Icon } from "../.."
import { BondedResponsibleResponse } from "../../../constants"

import "./responsible-card.scss"

type Props = {
  responsible: BondedResponsibleResponse
  profileColor: string
  onRemoveResponsibleBond: (bondId: number) => void
}

export const ResponsibleCard = ({
  responsible,
  profileColor,
  onRemoveResponsibleBond,
}: Props) => {
  const { bondId, responsibleFirstName, responsibleLastName } = responsible
  const [disabled, setDisabled] = useState(false)

  const handleRemoveButton = () => {
    onRemoveResponsibleBond(bondId)
    setDisabled(true)
  }

  return (
    <div
      className={`responsible-card responsible-card--color--${profileColor}`}
    >
      <span className="responsible-card--name">{`${responsibleFirstName} ${
        responsibleLastName ?? ""
      }`}</span>
      <button
        className="responsible-card--button-remove"
        onClick={handleRemoveButton}
        disabled={disabled}
      >
        <Icon name="trash" />
      </button>
    </div>
  )
}
