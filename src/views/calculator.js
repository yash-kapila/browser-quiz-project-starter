import { CORRECT_ANSWER_RATE_ID } from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const calculatorElement = () => {
  const correctAnswerElement = document.createElement('div');
  correctAnswerElement.id = 'calculator';
  correctAnswerElement.innerHTML = String.raw`
  <p id="${CORRECT_ANSWER_RATE_ID}" class="correct-answer-count"></p>
  `;
  return correctAnswerElement;
};
