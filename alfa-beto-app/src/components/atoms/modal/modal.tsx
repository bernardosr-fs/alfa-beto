import { Dispatch, ReactNode, SetStateAction } from "react"
import { createPortal } from "react-dom"
import { Icon } from ".."
import "./modal.scss"

type Props = {
  className?: string
  children: ReactNode
  setMustShowModal: Dispatch<SetStateAction<boolean>>
  mustShow: boolean
}

export const Modal = ({
  children,
  className,
  setMustShowModal,
  mustShow,
}: Props) => {
  if (!mustShow) return <></>
  return createPortal(
    <div className="backdrop">
      <div className={`modal ${className ?? ""} must-show--${mustShow}`}>
        <button
          className="close-button"
          onClick={() => setMustShowModal(!mustShow)}
        >
          <Icon name="xCircle" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
