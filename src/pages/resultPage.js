import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  QUIT_QUIZ_BUTTON_ID,
} from '../constants.js';
import { createResultElement } from '../views/resultView.js';
import { initQuestionPage } from './questionPage.js';
import { initWelcomePage } from './welcomePage.js';

export const resultPage = (correctAnswerCount) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const resultElement = createResultElement(correctAnswerCount);
  userInterface.appendChild(resultElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  document
    .getElementById(QUIT_QUIZ_BUTTON_ID)
    .addEventListener('click', quitQuiz);

  let timer = document.getElementById('timer');
  timer.style.display = 'none';
};

const quitQuiz = () => {
  initWelcomePage();
};

const startQuiz = () => {
  initQuestionPage(0);
};
