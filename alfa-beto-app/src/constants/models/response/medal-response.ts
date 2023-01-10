import { MEDAL_TYPE } from "../.."

export type MedalResponse = {
  id: number
  name: string
  type: MEDAL_TYPE
  achievingCondition: number
  image: string
}
