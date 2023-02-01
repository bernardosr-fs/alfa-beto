import { Avatar, Icon } from "../.."
import { CustomizationResponse, TypeSetFunction } from "../../../constants"

import "./item-card.scss"

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
  alreadyOwned: boolean
  setActiveItem: TypeSetFunction<CustomizationResponse | undefined>
}

export const ItemCard = ({ item, alreadyOwned, setActiveItem }: Props) => {
  const renderValue = () => {
    if (item.type.toString() === "AVATAR") {
      return (
        <>
          <div
            className={`item-card--overlay ${
              alreadyOwned ? "item-card--overlay--owned" : ""
            }`}
          >
            <Icon className="owned-check" name="check" />
          </div>
          <Avatar
            className="item-card--avatar"
            name={item.value as AvatarName}
          />
        </>
      )
    } else {
      return (
        <>
          <div
            className={`item-card-profile-color--overlay ${
              alreadyOwned ? "item-card-profile-color--overlay--owned" : ""
            }`}
          >
            <Icon
              className={`owned-check owned-check--${item.value}`}
              name="check"
            />
          </div>
          <div className={`profile-color profile-color--${item.value}`}></div>
        </>
      )
    }
  }

  return (
    <div className="item-card" onClick={() => setActiveItem(item)}>
      {renderValue()}
    </div>
  )
}
