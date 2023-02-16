import "./memory-game-card.scss"

type Props = {
  id: number
  word: boolean
  flipped: boolean
  name: string
  image: string
  onCardClick: (id: number, name: string) => void
}

export const MemoryGameCard = ({
  id,
  word,
  flipped,
  name,
  image,
  onCardClick,
}: Props) => {
  const renderCard = () => {
    if (!flipped) {
      return <img src={require(`../../../assets/images/logo.png`)} alt={name} />
    }
    if (!word) {
      return (
        <img
          src={require(`../../../assets/images/memory-game-cards/${image}`)}
          alt={name}
        />
      )
    } else {
      return <span>{name}</span>
    }
  }

  return (
    <div className="memory-game-card" onClick={() => onCardClick(id, name)}>
      {renderCard()}
    </div>
  )
}
