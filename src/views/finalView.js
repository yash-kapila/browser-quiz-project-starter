import { quizData } from '../data.js';

export const createFinalSummaryElement = () => {
  const { finalScore, questions } = quizData;
  const wrongAnswers = questions.length - finalScore;
  const percentage = (finalScore / questions.length) * 100;
  const totalScore = finalScore + '  /  ' + questions.length;

  const element = document.createElement('div');
  element.classList.add('result-box');

  let title = '';
  if (quizData.finalScore <= 3) {
    title =
      '<h1 class="final"> Unfortunately! </h1> <br><h2> You were awful :( </h2><br>';
  } else if (quizData.finalScore <= 5) {
    title =
      '<h1 class="final"> Good! </h1><br><h2> You need to Work hard :/ </h2><br>';
  } else {
    title =
      '<h1 class="final"> Congratulations! </h1><br><h2> You are a hero :)</h2><br> ';
  }

  element.innerHTML = `
    ${title}
    <table>
        <tr>
            <td>Total Question</td>
            <td span class="total-question"></span>${questions.length}</td>
        </tr>
        <tr>
            <td>Correct</td>
            <td span class="total-question"></span>${finalScore}</td>
        </tr>
        <tr>
            <td>Wrong</td>
            <td span class="total-question"></span>${wrongAnswers}</td>
        </tr>
            <td>Percentage</td>
            <td span class="total-question"></span>${
              percentage.toFixed(2) + '%'
            }</td>
        </tr>
        </tr>
            <td>Total Score</td>
            <td span class="total-question"></span>${totalScore}</td>
        </tr>
    </table>
      `;

  return element;
};