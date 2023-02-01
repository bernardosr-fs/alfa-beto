import { Avatar, PriceTag } from "../.."
import { CustomizationResponse } from "../../../constants"

import "./highlighted-item.scss"

type AvatarName =
  | "comet"
  | "earth"
  | "mars"
  | "mercury"
  | "moon"
  | "neptune"
  | "pluto"
  | "saturn"
  | "sun"
  | "uranus"
  | "venus"

type Props = {
  item: CustomizationResponse
  alreadyOwned?: boolean
}

export const HighlightedItem = ({ item, alreadyOwned }: Props) => {
  const renderValue = () => {
    if (item.type.toString() === "AVATAR") {
      return (
        <Avatar
          className="highlighted-item--avatar"
          name={item.value as AvatarName}
        />
      )
    } else {
      return (
        <div className={`profile-color-div profile-color--${item.value}`}></div>
      )
    }
  }

  return (
    <div className="highlighted-item">
      {renderValue()}
      {!alreadyOwned && (
        <div className="price-div">
          <span className="price-div--indicator">Valor:</span>
          <PriceTag value={item.price} />
        </div>
      )}
    </div>
  )
}
