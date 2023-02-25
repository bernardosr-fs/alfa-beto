import "./memory-game-card.scss"

type Props = {
  id: number
  word: boolean
  flipped: boolean
  type: string
  image: string
  finishedAttempt: boolean
  onCardClick: (id: number, name: string) => void
}

export const MemoryGameCard = ({
  id,
  word,
  flipped,
  type,
  image,
  finishedAttempt,
  onCardClick,
}: Props) => {
  const renderCard = () => {
    if (!flipped) {
      return <img src={require(`../../../assets/images/logo.png`)} alt={type} />
    }
    if (!word) {
      return (
        <img
          src={require(`../../../assets/images/memory-game-cards/${image}`)}
          alt={type}
        />
      )
    } else {
      return <span>{type}</span>
    }
  }

  return (
    <button
      className="memory-game-card"
      disabled={flipped || finishedAttempt}
      onClick={() => onCardClick(id, type)}
    >
      {renderCard()}
    </button>
  )
}
