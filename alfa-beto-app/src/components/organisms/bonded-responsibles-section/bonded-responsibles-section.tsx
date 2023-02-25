import { ResponsibleCard } from "../.."
import { BondedResponsibleResponse } from "../../../constants"
import "./bonded-responsibles-section.scss"

type Props = {
  profileColor: string
  responsibles: Array<BondedResponsibleResponse>
  onRemoveResponsibleBond: (bondId: number) => void
}

export const BondedResponsiblesSection = ({
  profileColor,
  responsibles,
  onRemoveResponsibleBond,
}: Props) => {
  const renderResponsibles = () =>
    responsibles.map((responsible) => {
      return (
        <ResponsibleCard
          key={responsible.bondId}
          responsible={responsible}
          profileColor={profileColor}
          onRemoveResponsibleBond={onRemoveResponsibleBond}
        />
      )
    })

  return (
    <>
      <h3 className="section-title">Responsáveis</h3>
      <section
        className={`bonded-responsibles-section section-color--${profileColor}`}
      >
        {renderResponsibles()}
      </section>
    </>
  )
}
