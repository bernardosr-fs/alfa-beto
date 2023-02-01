import {
  AvatarCustomizationResponse,
  OwnedCustomizationResponse,
} from "../constants"

export const getAvatarName = (
  equippedCustomizations: Array<OwnedCustomizationResponse>
) => {
  //@ts-ignore
  const avatarCustomizations: Array<AvatarCustomizationResponse> =
    equippedCustomizations
      .filter((customization) => customization.type.toString() === "AVATAR")
      .map((customization) => {
        return {
          id: customization.id,
          name: customization.name,
          type: customization.type,
          value: customization.value,
          equipped: customization.equipped,
          ownedCustomizationId: customization.ownedCustomizationId,
        }
      })

  const filteredCustomization = avatarCustomizations[0]?.value

  return filteredCustomization
}
