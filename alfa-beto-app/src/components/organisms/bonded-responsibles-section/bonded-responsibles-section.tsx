import { ResponsibleCard } from "../.."
import { BondedResponsibleResponse } from "../../../constants"
import "./bonded-responsibles-section.scss"

type Props = {
  responsibles: Array<BondedResponsibleResponse>
  onRemoveResponsibleBond: (bondId: number) => void
}

export const BondedResponsiblesSection = ({
  responsibles,
  onRemoveResponsibleBond,
}: Props) => {
  const renderResponsibles = () =>
    responsibles.map((responsible) => {
      return (
        <ResponsibleCard
          key={responsible.bondId}
          responsible={responsible}
          onRemoveResponsibleBond={onRemoveResponsibleBond}
        />
      )
    })

  return (
    <>
      <h3 className="section-title">Responsáveis</h3>
      <section className="bonded-responsibles-section">
        {renderResponsibles()}
      </section>
    </>
  )
}
