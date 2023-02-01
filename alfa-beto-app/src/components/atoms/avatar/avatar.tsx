import { avatarList } from "../../../assets/customizations"

import "./avatar.scss"

type Props = {
  className?: string
  name?:
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
}

export const Avatar = ({ className, name }: Props): JSX.Element => {
  return (
    <div className={`avatar ${className}`}>
      <img src={name ? avatarList[name] : avatarList["earth"]} alt={name} />
    </div>
  )
}
