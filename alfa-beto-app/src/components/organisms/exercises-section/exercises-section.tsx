import { ResponsibleCard } from "../.."
import { BondedResponsibleResponse } from "../../../constants"
import "./exercises-section.scss"

type Props = {
  responsibles: Array<BondedResponsibleResponse>
  onRemoveResponsibleBond: (bondId: number) => void
}

export const ExercisesSection = ({
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
