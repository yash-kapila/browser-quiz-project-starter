import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <button hidden id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;
element.classList.add('question-element');
  return element;
};

export const showNextQuestionButton = () => {
  const hiddenButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
hiddenButton.classList.add('hidden-button');
hiddenButton.hidden = false;
}