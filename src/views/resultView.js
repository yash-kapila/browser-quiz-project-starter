import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { QUIT_QUIZ_BUTTON_ID } from '../constants.js';
import { score } from '../pages/questionPage.js';

export const createResultElement = () => {
  const element = document.createElement('div');
  element.id = 'result';
  element.innerHTML = String.raw`
  <span></span>
    <span></span>
    <span></span>
    <span></span>
      <p class="result-paragraph">Thank you! You have completed this quiz!</p>
      <p class="result-score">You've answered:</p>
      <p><em><strong>${score}</strong></em> out of <em>10</em> questions</p>
      <div id="button">
      <button id="${START_QUIZ_BUTTON_ID}">
        Try Again
      </button>
      <button id="${QUIT_QUIZ_BUTTON_ID}">
        Quit Quiz
      </button>
    </div>

    `;
  return element;
};
