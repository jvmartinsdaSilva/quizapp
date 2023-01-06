import { createContext, useReducer } from 'react'

import questions from "../data/questions"

const STAGES = ['START', 'PLAY', 'END']

const initialStage = {
    gameStage: STAGES[0],
    questionsAmount: 2,
    questions: [],
    currentQuestion: 0,
    answerSelect: false,
    score: 0,
    currentQuestionAnswer: null
}


const quizReducer = (state, action) => {
    // console.log(state, action)

    switch (action.type) {
        case "CHANGE_STATE":

            return {
                ...state,
                gameStage: STAGES[1],
                questionsAmount: action.amount
            };

        case "SELECT_QUESTIONS":
            const myQuestions = []

            for (let i = 0; i < state.questionsAmount; i++) {
                myQuestions.push(questions[i])
            }

            return {
                ...state,
                questions: myQuestions
            }

        case "RANDOW_QUESTIONS":
            const RandowQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })

            return {
                ...state,
                questions: RandowQuestions
            }

        case "NEXT_QUESTION":
            const newQuestion = state.currentQuestion + 1
            let engGame = false
            if(!state.questions[newQuestion]) {
                engGame = true
            }

            return {
                ...state,
                currentQuestion: newQuestion,
                answerSelect: false,
                currentQuestionAnswer: null,
                gameStage: engGame ? STAGES[2] : state.gameStage
            }

        case "CHECK_QUESTION": {
            if (state.answerSelect) return state

            const myOption = action.checkOption.option
            const answer = action.checkOption.answer
            let point = 0

            if (myOption === answer) point++

            return {
                ...state,
                answerSelect: myOption,
                currentQuestionAnswer: answer,
                score: state.score + point
            }
        }

        case "NEW_GAME": {

            return initialStage
        }
        default:
            return state;
    }
}


export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialStage)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}