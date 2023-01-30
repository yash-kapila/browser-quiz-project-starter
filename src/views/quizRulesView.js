import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { QUIT_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the quiz rules screen
 * @returns {Element}
 */
export const createQuizRulesElement = () => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
      <h1>Quiz Rules</h1>
  
      <ol>
        <li> You can select one answer for each question. </li>
        <li> Once you select your answer it can't be undone. </li>
        <li> You'll get points on the basis of your correct answers. </li>
        <li> You can't exit from the quiz while you are playing. </li>
      </ol>
  
      <button id="${START_QUIZ_BUTTON_ID}">
        Start Quiz
      </button>
      <button id="${QUIT_QUIZ_BUTTON_ID}">
        Quit Quiz
      </button>
    `;

  return element;
};
