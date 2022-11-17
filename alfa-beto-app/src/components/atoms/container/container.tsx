import { ReactNode } from "react"
import "./container.scss"

type Props = {
  className?: string
  children: ReactNode
}

export const Container = ({ children, className }: Props) => {
  return <div className={`container ${className ?? ""}`}>{children}</div>
}
