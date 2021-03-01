import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
// Types
import { QuestionState, Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTriviaHandler = async () => {};

  const checkAnswerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestionHandler = () => {};

  return (
    <div className='App'>
      <h1>REACT QUIZZ</h1>
      <button className='start' onClick={startTriviaHandler}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard 
    questionNr= {number + 1}
    totalQuestions= {TOTAL_QUESTIONS}
    question= {questions[number].question}
      answers= {questions[number].answers}
      userAnswer = {userAnswers ? userAnswers[number] : undefined}
      callback= {checkAnswerHandler}
     /> */}
      <button className='next' onClick={nextQuestionHandler}>
        Next Question
      </button>
    </div>
  );
};

export default App;
