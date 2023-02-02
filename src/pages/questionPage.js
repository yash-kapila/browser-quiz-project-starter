
/*import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  CURRENT_SCORE_ID,
  CURRENT_QUESTION_NUM_ID,
} from "../ConstantSourceNode.js";

import {
  createQuestionElement,
  showNextQuestionButton,
} from "../views/questionView.js";
import { createAnswerElement } from "../views/answerView.js";
import { createScoreElement } from "../views/scoreView.js";
import { updateScore } from "../views/scoreView.js";
import { progressBar } from "../views/createQuestionNumberView.js";
import { finalSummaryPage } from "./finalSummaryPage.js";
import { quizData } from "../data.js";

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  userInterface.appendChild(createScoreElement());
  userInterface.appendChild(progressBar());

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  localStorage.setItem("currentQuestionIndex", quizData.currentQuestionIndex);

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answers = JSON.parse(localStorage.getItem("selectedAnswers"));
  if (answers[quizData.currentQuestionIndex]) {
    currentQuestion["selected"] = answers[quizData.currentQuestionIndex];
    showNextQuestionButton();
  }

  const correctAnswer = (event) => {
    if (!(currentQuestion["selected"] === null)) {
      return;
    }

    const selectedAnswer = event.target;
    const correctAnswer = currentQuestion.correct;

    if (selectedAnswer.dataset.key === correctAnswer) {
      selectedAnswer.classList.add("correct");
      quizData.finalScore++;

      localStorage.setItem("finalScore", quizData.finalScore);
    } else {
      selectedAnswer.classList.add("wrong");
    }

    currentQuestion["selected"] = selectedAnswer.dataset.key;

    answers.push(selectedAnswer.dataset.key);
    localStorage.setItem("selectedAnswers", JSON.stringify(answers));

    if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
      localStorage.clear();
      finalSummaryPage();
      return;
    }

    updateScore();
  };

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener("click", showNextQuestionButton);
    answerElement.addEventListener("click", correctAnswer);
  }
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener("click", nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestion + 1;

  initQuestionPage();
};*/
import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};