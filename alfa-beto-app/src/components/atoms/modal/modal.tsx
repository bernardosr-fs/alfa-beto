import { Dispatch, ReactNode, SetStateAction } from "react"
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
  return (
    <div className={`modal ${className ?? ""} must-show--${mustShow}`}>
      <button
        className="close-button"
        onClick={() => setMustShowModal(!mustShow)}
      >
        {" "}
        X{" "}
      </button>
      {children}
    </div>
  )
}
