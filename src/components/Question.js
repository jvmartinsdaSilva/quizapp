import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Option from "./Option"

import "./Question.css"

function Question() {
    const [quizState, dispatch] = useContext(QuizContext)

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_QUESTION",
            checkOption: { answer: currentQuestion.answer, option }
        })
    }

    const currentQuestion = quizState.questions[quizState.currentQuestion]
    const answerQuestion = quizState.currentQuestionAnswer
    const myAnswer = quizState.answerSelect

    return (
        <div className="question">
            <h2>{currentQuestion.question}</h2>
            {myAnswer && answerQuestion === myAnswer ? (<p>Você acertou</p>) : ""}
            {myAnswer && answerQuestion !== myAnswer ? (<p>Você errou, a resposta era <span>{answerQuestion}</span></p>) : ""}
            {currentQuestion.options.map((option) => (
                <Option
                    key={option}
                    option={option}
                    selectOption={() => onSelectOption(option)}
                />
            ))}
            {quizState.answerSelect && (
                <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>NEXT</button>
            )}
        </div>
    )
}

export default Question