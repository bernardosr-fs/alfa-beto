import "./exercise-tutorial-video-card.scss"

type Props = {
  exerciseId: number
}

export const ExerciseTutorialVideoCard = ({ exerciseId }: Props) => {
  const videosData = { memoryGame: "dQw4w9WgXcQ", mathQuiz: "9MUz9R7DMNQ" }

  const renderVideo = () => {
    var videoUrl = "https://www.youtube.com/embed/"

    if (exerciseId <= 3) {
      videoUrl += videosData.memoryGame
    } else {
      videoUrl += videosData.mathQuiz
    }

    return <iframe className="video" src={videoUrl} />
  }
  return (
    <div className="exercise-tutorial-video-card-component">
      <span>COMO FUNCIONA O EXERCÍCIO:</span>
      <div className="exercise-tutorial-video-card">{renderVideo()}</div>
    </div>
  )
}
