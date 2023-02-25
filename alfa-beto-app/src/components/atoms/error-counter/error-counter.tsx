import { Icon } from "../icon/icon"

import "./error-counter.scss"

type Props = {
  errorCount: number
  errorsPermitted: number
}

export const ErrorCounter = ({ errorCount, errorsPermitted }: Props) => {
  return (
    <div className="error-counter">
      <span>ERROS:</span>
      <div className="error-counter-container">
        <span className="errors">{errorCount}</span>
        <span>/</span>
        <span className="errors">{errorsPermitted}</span>
      </div>
    </div>
  )
}
