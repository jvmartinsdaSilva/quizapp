import { useState, useContext } from 'react'
import { QuizContext } from '../context/quiz';

import questions from "../data/questions"

import "./Menu.css"


function Menu() {
  const [amountQuestions, setAmountQuestions] = useState(questions.length)
  const [quizState, dispatch] = useContext(QuizContext)

  const playGame = () => {
    dispatch({ type: "CHANGE_STATE", amount: amountQuestions })
    dispatch({ type: "SELECT_QUESTIONS" })
  }

  return (
    <div className='Menu'>
      <h1>Quiz front-end</h1>
      <h2>Teste seus conhecimentos sobre o front-end</h2>
      <p>Selecione a quantidade de questões que deseja responder</p>
      <p className='amount'>{amountQuestions}</p>
      <input
        type='range'
        min={1} 
        max={questions.length} 
        onChange={(e) => setAmountQuestions(e.target.value)} 
        />
      <button onClick={playGame}>INICIAR</button>
    </div>
  )
}

export default Menu