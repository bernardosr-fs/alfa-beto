import React from "react"
import {
  ExerciseAttemptResponse,
  landAnimals,
  seaAnimals,
  objects,
} from "../../../../constants"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"
import {
  MemoryGameCard,
  ErrorCounter,
  Modal,
  GoBackButton,
} from "../../../index"
import { shuffleArray } from "../../../../utils"
import { PATHS } from "../../../../constants"
import "./memory-game-template.scss"

type Props = {
  exercise: ExerciseAttemptResponse
  onFinishExercise: () => void
  onFailExercise: () => void
}

export const MemoryGameTemplate = ({
  exercise,
  onFinishExercise,
  onFailExercise,
}: Props) => {
  const navigate = useNavigate()

  const getMemoryGameCards = () => {
    switch (exercise.exerciseId) {
      case 1: {
        return shuffleArray([...seaAnimals])
      }
      case 2: {
        return shuffleArray([...landAnimals])
      }
      case 3: {
        return shuffleArray([...objects])
      }
    }
  }

  const [finishedAttempt, setFinishedAttempt] = useState(false)
  const [attemptResult, setAttemptResult] = useState("")
  const [cards, setCards] = useState(getMemoryGameCards())
  const [doneCombinations, setDoneCombinations] = useState(0)
  const [errors, setErrors] = useState(0)
  const [previousCardClick, setPreviousCardClick] = useState({
    id: 0,
    type: "",
  })

  const renderCards = useCallback(() => {
    return cards?.map((card) => (
      <MemoryGameCard
        key={card.id}
        id={card.id}
        word={card.word}
        flipped={card.flipped}
        type={card.type}
        image={card.image}
        finishedAttempt={finishedAttempt}
        onCardClick={onCardClick}
      />
    ))
  }, [cards, previousCardClick.id])

  useEffect(() => {
    const checkVictory = () => {
      if (
        (exercise.difficulty === "EASY" && doneCombinations === 3) ||
        (exercise.difficulty === "MEDIUM" && doneCombinations === 5) ||
        (exercise.difficulty === "HARD" && doneCombinations === 8)
      ) {
        onFinishExercise()
        setFinishedAttempt(true)
        setAttemptResult("success")
      }
    }
    checkVictory()
  }, [doneCombinations])

  useEffect(() => {
    console.log(errors)
    const checkFail = () => {
      if (errors > exercise.errorsPermitted) {
        onFailExercise()
        setFinishedAttempt(true)
        setAttemptResult("failed")
      }
    }
    checkFail()
  }, [errors])

  const renderModal = () => {
    if (attemptResult == "success") {
      return (
        <>
          <span className="modal-title">Parabéns!</span>
          <img
            src={require(`../../../../assets/images/characters/student-2.png`)}
            alt={"Personagem"}
          />
          <div>
            <span>Você ganhou:</span>
            <span className="reward-coins">{exercise.rewardCoins} MOEDAS</span>
          </div>
          <button
            onClick={() => navigate(PATHS.portExerciseSelection)}
            className={`finished-execise-button ${attemptResult}-button`}
          >
            <span>VOLTAR</span>
          </button>
        </>
      )
    } else if (attemptResult == "failed") {
      return (
        <>
          <span className="modal-title">Foi por pouco!</span>
          <img
            src={require(`../../../../assets/images/characters/student-3.png`)}
            alt={"Personagem"}
          />
          <span className="failed-exercise-message">
            Infelizmente você não conseguiu completar o exercício.
          </span>
          <button
            onClick={() =>
              navigate(PATHS.startingExercise, {
                state: {
                  id: exercise.exerciseId,
                },
              })
            }
            className={`finished-execise-button ${attemptResult}-button`}
          >
            <span>TENTAR NOVAMENTE</span>
          </button>
        </>
      )
    }
  }

  const onCardClick = (id: number, type: string) => {
    if (id !== previousCardClick.id) {
      if (previousCardClick.id === 0) {
        flipCard(id)
        setPreviousCardClick({ ...previousCardClick, id: id, type: type })
      } else {
        flipCard(id)
        attempt(id, type)
      }
    }
  }

  const flipCard = (id: number) => {
    const updatedCards = cards?.map((card) => {
      if (card.id === id) {
        return { ...card, flipped: !card.flipped }
      }
      return card
    })

    setCards(updatedCards)
  }

  const attempt = async (
    secondCardClickId: number,
    secondCardClickType: string
  ) => {
    if (previousCardClick.type === secondCardClickType) {
      setDoneCombinations(doneCombinations + 1)
    } else {
      setErrors(errors + 1)
      await finishAttempt(secondCardClickId)
    }
    resetPreviousClick()
  }

  const finishAttempt = (secondCardClickId: number) =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resetClickedCards(secondCardClickId)
        resolve()
      }, 1000)
    })

  const resetClickedCards = (secondCardClickId: number) => {
    const updatedCards = cards?.map((card) => {
      if (card.id === previousCardClick.id) {
        return { ...card, flipped: !card.flipped }
      }
      if (card.id === secondCardClickId) {
        return { ...card, flipped: false }
      }
      return card
    })
    setCards(updatedCards)
  }

  const resetPreviousClick = () => {
    setPreviousCardClick({ ...previousCardClick, id: 0, type: "" })
  }

  return (
    <div className="memory-game">
      <GoBackButton
        className={"go-back-button-exercise"}
        path={PATHS.portExerciseSelection}
      />

      <ErrorCounter
        errorCount={errors}
        errorsPermitted={exercise.errorsPermitted}
      />
      <div className="memory-game-card-list">{renderCards()}</div>
      <Modal
        className={`finished-game-modal-container ${attemptResult}`}
        mustShow={finishedAttempt}
        setMustShowModal={setFinishedAttempt}
      >
        {renderModal()}
      </Modal>
    </div>
  )
}
