import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createQuizRulesElement = () => {
  const element = document.createElement('div');

  element.className = 'container';
  element.innerHTML = String.raw`
  <img id= "question-mark" src="../wallhaven-od6z1p.jpeg" alt="">
    <h1 id="welcome-head">Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">Rules</button>
  `;
  return element;
};
