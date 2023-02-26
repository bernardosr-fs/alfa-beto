import { useState } from "react"
import { BondInviteCard, Icon, Modal } from "../.."
import { BondInviteResponse } from "../../../constants"

import "./student-notifications.scss"

type Props = {
  profileColor: String
  pendingInvites: Array<BondInviteResponse> | undefined
  onAcceptInvite: (inviteId: number) => Promise<void>
  onRecuseInvite: (inviteId: number) => Promise<void>
}

export const StudentNotifications = ({
  profileColor,
  pendingInvites,
  onAcceptInvite,
  onRecuseInvite,
}: Props) => {
  const [mustShowModal, setMustShowModal] = useState(false)

  const renderBondInvites = () => {
    if (pendingInvites && pendingInvites?.length) {
      return pendingInvites?.map((pendingInvite) => {
        return (
          <BondInviteCard
            invite={pendingInvite}
            profileColor={profileColor}
            onAcceptInvite={onAcceptInvite}
            onRecuseInvite={onRecuseInvite}
          />
        )
      })
    }
  }

  return (
    <>
      <button
        onClick={() => setMustShowModal(true)}
        className={`notification-button notification-button--${profileColor}`}
      >
        <Icon name="bell" />
        {pendingInvites?.length ? (
          <div
            className={`notification-button--has-notification notification-button--has-notification--${profileColor}`}
          >
            {pendingInvites.length}
          </div>
        ) : (
          <></>
        )}
      </button>
      <Modal
        className={`modal-notifications modal-notifications--${profileColor}`}
        mustShow={mustShowModal}
        setMustShowModal={setMustShowModal}
      >
        {renderBondInvites() ?? "Parece que não há nenhuma notificação!"}
      </Modal>
    </>
  )
}
