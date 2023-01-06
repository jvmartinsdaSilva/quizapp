import { useContext, useEffect } from 'react';

import Menu from './components/Menu';
import { QuizContext } from './context/quiz';

import './App.css';
import Question from './components/Question';
import EndGame from './components/EndGame';


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "RANDOW_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      {quizState.gameStage === "START" && <Menu />}
      {quizState.gameStage === "PLAY" && <Question />}
      {quizState.gameStage === "END" && <EndGame />}
    </div>
  );
}

export default App;
