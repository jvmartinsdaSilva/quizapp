import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import "./Option.css"


function Option({ option, selectOption }) {
  const [quizState, dispatch] = useContext(QuizContext)

  const answerSelect = quizState.answerSelect
  const currentQuestionAnswer = quizState.currentQuestionAnswer

  return (
    <div
      className={`option 
      ${answerSelect && option === currentQuestionAnswer ? "correct" : ""}
      ${answerSelect && option !== currentQuestionAnswer ? "wrong" : ""}
     `}

      onClick={selectOption}>
      {option}
    </div>
  )
}

export default Option