import React from 'react';

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log('quizState', quizState)
  return <div>Quiz</div>;
};

export default Quiz;
