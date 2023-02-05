import { PROGRESS_ID } from '../constants.js';
import { quizData } from '../data.js';

//Showing the progress in terms of question number
export function initQuestionProgress() {
  const progress = document.getElementById(PROGRESS_ID);
  progress.id = 'progress';
  progress.innerHTML = `Question: ${
    quizData.currentQuestionIndex + 1
  }  out of 10`;
}
