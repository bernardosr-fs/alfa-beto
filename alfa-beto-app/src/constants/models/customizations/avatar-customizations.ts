import { CUSTOMIZATION_TYPE } from "../.."

export type AvatarCustomizationResponse = {
  id: number
  name: string
  type: CUSTOMIZATION_TYPE.AVATAR
  value:
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
  equipped: boolean
  ownedCustomizationId: number
}
