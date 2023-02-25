import { MedalResponse } from "../../../constants"

import "./medal-card.scss"

type Props = {
  value?: MedalResponse
  className?: string
}

const renderImage = (name: string | undefined, image: string | undefined) => {
  return (
    <img
      src={require(`../../../assets/images/medals/${image}.png`)}
      alt={name}
    />
  )
}

export const MedalCard = ({ className, value }: Props): JSX.Element => (
  <div className={`medal-card ${className}`}>
    {renderImage(value?.name, value?.image)}
  </div>
)
