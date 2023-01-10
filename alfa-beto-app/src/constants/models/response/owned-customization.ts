import { CUSTOMIZATION_TYPE } from "../.."

export type OwnedCustomizationResponse = {
  customizationId: number
  name: string
  type: CUSTOMIZATION_TYPE
  value: string
  equipped: boolean
  ownedCustomizationId: number
}
