import { MedalCard } from "../.."
import { MedalResponse } from "../../../constants"

import "./medals-section.scss"

type Props = {
  profileColor: string
  medals: Array<MedalResponse> | undefined
}

export const MedalsSection = ({ profileColor, medals }: Props) => {
  const renderCards = () => {
    if (medals && medals?.length > 0) {
      return medals?.map((medal) => (
        <MedalCard
          key={medal.id}
          value={medal}
          className="medals-section--medal-card"
        />
      ))
    }

    return "Parece que o estudante ainda não conquistou nenhuma medalha!"
  }

  return (
    <>
      <h3 className="section-title">Mural</h3>
      <section className={`medals-section section-color--${profileColor}`}>
        {renderCards()}
      </section>
    </>
  )
}
