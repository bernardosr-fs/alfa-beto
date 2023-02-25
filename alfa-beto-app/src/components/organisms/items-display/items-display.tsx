import { useEffect, useState } from "react"
import { ItemsTab, HighlightedItem, PriceTag } from "../.."

import {
  CustomizationResponse,
  StudentDetailedResponse,
} from "../../../constants"

import "./items-display.scss"

type Props = {
  student?: StudentDetailedResponse
  avaibleAvatars?: Array<CustomizationResponse>
  avaibleProfileColors?: Array<CustomizationResponse>
  ownedAvatars?: Array<CustomizationResponse>
  ownedProfileColors?: Array<CustomizationResponse>
  onSubmitBuyCustomization: (id: number) => Promise<void>
  onSubmitEquipCustomization: (id: number) => Promise<void>
}

export const ItemsDisplay = ({
  student,
  avaibleAvatars,
  avaibleProfileColors,
  ownedAvatars,
  ownedProfileColors,
  onSubmitBuyCustomization,
  onSubmitEquipCustomization,
}: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const getFirstItem = () => {
    if (activeTab === 0) {
      return ownedAvatars?.at(0) ?? avaibleAvatars?.at(0)
    } else {
      return ownedProfileColors?.at(0) ?? avaibleProfileColors?.at(0)
    }
  }

  const [activeItem, setActiveItem] = useState<
    CustomizationResponse | undefined
  >(getFirstItem())
  const [disableBuyButton, setDisableBuyButton] = useState<boolean>(false)

  useEffect(() => {
    setActiveItem(getFirstItem())
  }, [avaibleAvatars, avaibleProfileColors, ownedAvatars, ownedProfileColors])

  useEffect(() => {
    setDisableBuyButton(false)
  }, [activeItem])

  useEffect(() => {
    setActiveItem(getFirstItem())
  }, [activeTab])

  const checkIfItemIsOwned = () => {
    return (
      ownedAvatars?.some((item) => item.id === activeItem?.id) ||
      ownedProfileColors?.some((item) => item.id === activeItem?.id)
    )
  }

  return (
    <div className="item-display">
      <div className="student-coins">
        Suas moedas: <PriceTag value={student?.coins} />{" "}
      </div>
      <ul className="nav-tab">
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => setActiveTab(0)}
        >
          Avatares
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          Cores
        </li>
      </ul>
      <div className="item-display--content">
        <div className="item-display--item-tabs">
          <ItemsTab
            active={activeTab === 0}
            avaibleItems={avaibleAvatars}
            ownedItems={ownedAvatars}
            setActiveItem={setActiveItem}
          />
          <ItemsTab
            active={activeTab === 1}
            avaibleItems={avaibleProfileColors}
            ownedItems={ownedProfileColors}
            setActiveItem={setActiveItem}
          />
        </div>
        <div className="item-display--highlighted-item">
          {activeItem && (
            <>
              <HighlightedItem
                item={activeItem}
                alreadyOwned={checkIfItemIsOwned()}
              />
              <div className="item-display--buttons">
                {checkIfItemIsOwned() ? (
                  <button
                    onClick={() => onSubmitEquipCustomization(activeItem.id)}
                  >
                    Equipar
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onSubmitBuyCustomization(activeItem.id)
                      setDisableBuyButton(true)
                    }}
                    disabled={disableBuyButton}
                  >
                    Comprar
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
