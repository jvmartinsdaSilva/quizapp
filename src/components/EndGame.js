import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./EndGame.css"

function EndGame() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='endGame'>
      <h1>Quiz Concluído</h1>
      <h2>Você acertou {quizState.score} de {quizState.questions.length} questões</h2>
      <p>Que tal jogar novamente?</p>
      <button onClick={() => dispatch({ type: 'NEW_GAME' })}>JOGAR NOVAMENTE</button>
    </div>
  )
}

export default EndGame