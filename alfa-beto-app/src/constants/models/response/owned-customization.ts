import { CUSTOMIZATION_TYPE } from "../.."

export type OwnedCustomizationResponse = {
  id: number
  name: string
  type: CUSTOMIZATION_TYPE
  value:
    | "red"
    | "green"
    | "blue"
    | "orange"
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
