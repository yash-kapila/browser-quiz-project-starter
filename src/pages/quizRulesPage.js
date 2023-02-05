import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  QUIT_QUIZ_BUTTON_ID,
} from '../constants.js';
import { createQuizRulesElement } from '../views/quizRulesView.js';
import { initQuestionPage } from './questionPage.js';
import { initWelcomePage } from './welcomePage.js';

export const initQuizRulesPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const rulesElement = createQuizRulesElement();
  userInterface.appendChild(rulesElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  document
    .getElementById(QUIT_QUIZ_BUTTON_ID)
    .addEventListener('click', quitQuiz);
};

const quitQuiz = () => {
  initWelcomePage();
};

const startQuiz = () => {
  initQuestionPage(0);
};
