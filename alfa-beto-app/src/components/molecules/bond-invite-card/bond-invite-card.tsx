import { useState } from "react"
import { BondInviteResponse } from "../../../constants"
import { Icon } from "../.."

import "./bond-invite-card.scss"

type Props = {
  invite: BondInviteResponse
  profileColor: String
  onAcceptInvite: (inviteId: number) => Promise<void>
  onRecuseInvite: (inviteId: number) => Promise<void>
}

export const BondInviteCard = ({
  invite,
  profileColor,
  onAcceptInvite,
  onRecuseInvite,
}: Props) => {
  const { id, responsibleFirstName, responsibleLastName } = invite
  const [disabled, setDisabled] = useState(false)

  const handleAcceptButton = () => {
    if (id) {
      onAcceptInvite(id)
      setDisabled(true)
    }
  }

  const handleRecuseButton = () => {
    if (id) {
      onRecuseInvite(id)
      setDisabled(true)
    }
  }

  return (
    <div className={`bond-invite-card bond-invite-card--${profileColor}`}>
      <span className="bond-invite-card--name">{`${responsibleFirstName} ${responsibleLastName}`}</span>
      <div className="bond-invite-card--buttons">
        <button onClick={handleAcceptButton} disabled={disabled}>
          <Icon name="check" />
        </button>
        <button onClick={handleRecuseButton} disabled={disabled}>
          <Icon name="error" />
        </button>
      </div>
    </div>
  )
}
