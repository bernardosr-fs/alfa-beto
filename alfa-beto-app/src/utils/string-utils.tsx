import { CUSTOMIZATION_TYPE, OwnedCustomizationResponse } from "../constants"

export const getAvatarName = (
  equippedCustomizations: Array<OwnedCustomizationResponse>
) => {
  return equippedCustomizations.filter(
    (customization) => customization.type === CUSTOMIZATION_TYPE.AVATAR
  )[0]?.value
}
