import { toast } from "react-toastify"
import { Icon } from "../"

import "react-toastify/dist/ReactToastify.css"
import "./toast.scss"

export const showToast = (type, message, icon) =>
  toast(
    <div className="toast">
      <Icon name={icon || type} />
      <span>{message}</span>
    </div>,
    {
      className: `custom-toast costum-toast--${type}`,
      progressClassName: `progress-bar`,
    }
  )
