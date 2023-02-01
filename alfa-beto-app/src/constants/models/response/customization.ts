import { CUSTOMIZATION_TYPE } from "../../../constants/enum"

export type CustomizationResponse = {
  id: number
  name: string
  type: CUSTOMIZATION_TYPE
  price: number
  value: string
}
