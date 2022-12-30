import * as iconList from "../../../assets/icons"

import "./icon.scss"

type Icons = {
  [key: string]: JSX.Element
}

const icons: Icons = iconList

type Props = {
  className?: string
  name: string
}

export const Icon = ({ className, name }: Props): JSX.Element => (
  <i className={className}>{icons[name]}</i>
)
