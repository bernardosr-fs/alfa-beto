import { CUSTOMIZATION_TYPE } from "../.."

export type OwnedCustomizationResponse = {
  customizationId: number
  name: string
  type: CUSTOMIZATION_TYPE
  custom_value:
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
