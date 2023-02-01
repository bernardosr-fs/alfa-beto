import { Icon } from ".."

import "./price-tag.scss"

type Props = {
  value?: number
  className?: string
}

export const PriceTag = ({ className, value }: Props): JSX.Element => (
  <div className={`price-tag ${className}`}>
    <Icon name="star" />
    <span>{value ?? 0}</span>
  </div>
)
