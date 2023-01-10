import { MedalResponse, OwnedCustomizationResponse } from "."

export type StudentDetailedResponse = {
  id: number
  userName: string
  firstName: string
  lastName: string
  coins: number
  firstBond: boolean
  equippedCustomizations: Array<OwnedCustomizationResponse>
  achievedMedals: Array<MedalResponse>
}
