import React from "react"
import {
  ExerciseAttemptResponse,
  EXERCISE_DIFFICULTY,
} from "../../../../constants"
import { useEffect, useState, useCallback } from "react"
import { GoBackButton, MemoryGameCard } from "../../../index"
import { shuffleArray } from "../../../../utils"
import "./memory-game-template.scss"

type Props = {
  exercise: ExerciseAttemptResponse
  onFinishExercise: () => void
  onFailExercise: () => void
}

const seaAnimals = [
  {
    id: 1,
    word: false,
    flipped: false,
    name: "Peixe",
    image: "sea-animals/fish.png",
  },
  {
    id: 2,
    word: false,
    flipped: false,
    name: "Tubarão",
    image: "sea-animals/shark.png",
  },
  {
    id: 3,
    word: false,
    flipped: false,
    name: "Baleia",
    image: "sea-animals/whale.png",
  },
  { id: 4, word: true, flipped: false, name: "Peixe", image: "" },
  { id: 5, word: true, flipped: false, name: "Tubarão", image: "" },
  { id: 6, word: true, flipped: false, name: "Baleia", image: "" },
]

export const MemoryGameTemplate = ({
  exercise,
  onFinishExercise,
  onFailExercise,
}: Props) => {
  const getMemoryGameCards = () => {
    switch (exercise.exerciseId) {
      case 1: {
        return shuffleArray([...seaAnimals])
      }
    }
  }

  const [cards, setCards] = useState(getMemoryGameCards())
  const [doneCombinations, setDoneCombinations] = useState(0)
  const [errors, setErrors] = useState(0)
  const [previousCardClick, setPreviousCardClick] = useState({
    id: 0,
    type: "",
  })

  useEffect(() => {
    const checkVictory = () => {
      if (
        exercise.difficulty === EXERCISE_DIFFICULTY.EASY &&
        doneCombinations === 3
      ) {
        onFinishExercise()
      }
      if (
        exercise.difficulty === EXERCISE_DIFFICULTY.MEDIUM &&
        doneCombinations === 5
      ) {
        onFinishExercise()
      }
      if (
        exercise.difficulty === EXERCISE_DIFFICULTY.HARD &&
        doneCombinations === 10
      ) {
        onFinishExercise()
      }
    }
    checkVictory()
  }, [doneCombinations])

  useEffect(() => {
    const checkFail = () => {
      if (errors > exercise.errorsPermitted) {
        onFailExercise()
      }
    }
    checkFail()
  }, [errors])

  const renderCards = useCallback(() => {
    console.log("CALLBACK")
    return cards?.map((card) => (
      <MemoryGameCard
        key={card.id}
        id={card.id}
        word={card.word}
        flipped={card.flipped}
        name={card.name}
        image={card.image}
        onCardClick={onCardClick}
      />
    ))
  }, [cards])

  const onCardClick = (id: number, name: string) => {
    if (id !== previousCardClick.id) {
      if (previousCardClick.id === 0) {
        setPreviousCardClick({ id: id, type: name })
        flipCard(id)
      } else {
        flipCard(id)
        attempt(id, name)
      }
    }
  }

  const flipCard = (id: number) => {
    console.log("VIROU A CARTA")
    setCards(
      cards?.map((card) => {
        if (card.id === id) {
          const retorno = { ...card, flipped: !card.flipped }
          console.log(retorno)
          return retorno
        }
        return card
      })
    )
  }

  const finishAttempt = (secondCardClickId: number) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        flipCard(previousCardClick.id)
        flipCard(secondCardClickId)
        resolve()
      }, 5000)
    })

  const attempt = async (
    secondCardClickId: number,
    secondCardClickType: string
  ) => {
    if (previousCardClick.type === secondCardClickType) {
      console.log("ACERTOU!")
      setDoneCombinations(doneCombinations + 1)
    } else {
      setErrors(errors + 1)
      await finishAttempt(secondCardClickId)
      console.log("ERROU!")
    }
    resetPreviousClick()
  }

  const resetPreviousClick = () => {
    setPreviousCardClick({ id: 0, type: "" })
  }

  return (
    <div className="memory-game">
      <div className="memory-game-card-list">{renderCards()}</div>
    </div>
  )
}
