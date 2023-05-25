import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import Quiz from './components/Quiz';
import { QuizProvider } from './context/quiz';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <QuizProvider>
    <Quiz />
  </QuizProvider>
);
