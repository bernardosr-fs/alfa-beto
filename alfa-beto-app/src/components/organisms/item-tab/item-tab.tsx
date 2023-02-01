import { ItemCard } from "../.."
import { CustomizationResponse, TypeSetFunction } from "../../../constants"

import "./item-tab.scss"

type Props = {
  active: boolean
  avaibleItems?: Array<CustomizationResponse>
  ownedItems?: Array<CustomizationResponse>
  setActiveItem: TypeSetFunction<CustomizationResponse | undefined>
}

export const ItemsTab = ({
  active,
  avaibleItems,
  ownedItems,
  setActiveItem,
}: Props) => {
  const renderOwnedItems = () => {
    return ownedItems?.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        alreadyOwned={true}
        setActiveItem={setActiveItem}
      />
    ))
  }

  const renderAvaibleItems = () => {
    return avaibleItems?.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        alreadyOwned={false}
        setActiveItem={setActiveItem}
      />
    ))
  }

  return (
    <div className={`items-tab ${active ? "tab--active" : ""}`}>
      {renderOwnedItems()}
      {renderAvaibleItems()}
    </div>
  )
}
