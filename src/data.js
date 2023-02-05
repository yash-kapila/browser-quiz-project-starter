/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  finalScore: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is JavaScript used for?',
      answers: {
        a: 'Web development',
        b: 'Mobile app development',
        c: 'Game development',
        d: 'All of the above',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#summary',
        },
        {
          text: 'Future Learn',
          href:
            'https://www.futurelearn.com/info/blog/what-is-javascript-used-for',
        },
      ],
    },
    {
      text: 'Which of the following is NOT a data type in JavaScript? ',
      answers: {
        a: 'string',
        b: 'number',
        c: 'boolean',
        d: 'file',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'electricalexams.co',
          href:
            'https://www.electricalexams.co/following-is-not-a-javascript-data-types/',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
        },
      ],
    },
    {
      text: 'What is the syntax for declaring a variable in JavaScript? ',
      answers: {
        a: 'var x',
        b: 'x = 10',
        c: 'int x = 10',
        d: '#x = 10',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3school.com',
          href: 'https://www.w3schools.com/js/js_variables.asp',
        },
        {
          text: 'TutorialsTeacher',
          href:
            'https://www.tutorialsteacher.com/javascript/javascript-variable',
        },
      ],
    },
    {
      text: 'What is the difference between == and === in JavaScript?',
      answers: {
        a: '== value equality, === value and type',
        b: '== type equality, === value',
        c: 'Both check value equality',
        d: 'Both check type equality',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'codesolutionstuff.com',
          href:
            'https://www.codesolutionstuff.com/difference-between-double-equals-and-triple-equals-in-javascript/',
        },
        {
          text: 'Scaler Topics',
          href:
            'https://www.scaler.com/topics/javascript/difference-between-double-equals-and-triple-equals-in-javascript/',
        },
      ],
    },
    {
      text: 'How do you add an element to the end of an array in JavaScript?',
      answers: {
        a: 'array.append(element)',
        b: 'array.push(element)',
        c: 'array.add(element)',
        d: 'array.insert(element)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3schools.com',
          href: 'https://www.w3schools.com/jsref/jsref_push.asp',
        },
        {
          text: 'freecodecamp.org',
          href:
            'https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/',
        },
      ],
    },
    {
      text: 'What is the difference between let and var in JavaScript?',
      answers: {
        a: 'let block scoped, var function scoped',
        b: 'var block scoped, let function scoped',
        c: 'Both are block scoped',
        d: 'Both are function scoped',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'levelup.gitconnected.com',
          href:
            'https://levelup.gitconnected.com/javascript-null-vs-undefined-2acda986f79f',
        },
        {
          text: 'geeksforgeeks.org',
          href:
            'https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/',
        },
      ],
    },
    {
      text:
        'Which of the following is a way to declare a function in JavaScript?',
      answers: {
        a: 'var myFunction = function() {}',
        b: 'function myFunction() {}',
        c: 'both A and B',
        d: 'let myFunction = () => {}',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'w3schools.com',
          href: 'https://www.w3schools.com/js/js_functions.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function',
        },
      ],
    },
    {
      text: 'What is closure in JavaScript?',
      answers: {
        a: 'Inner func with access to outer vars',
        b: 'Prevents change of variable value',
        c: 'Syntax for declaring a function',
        d: 'None of the above',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        },
        {
          text: 'w3schools.com',
          href: 'https://www.w3schools.com/js/js_function_closures.asp',
        },
      ],
    },
    {
      text:
        'Which of the following is a way to loop through an array in JavaScript?',
      answers: {
        a: 'for(i = 0; i < myArray.length; i++)',
        b: 'while(myArray.length > 0)',
        c: 'do while(myArray.length > 0)',
        d: 'for each(var element in myArray)',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3docs.com',
          href:
            'https://www.w3docs.com/snippets/javascript/how-to-loop-through-an-array-in-javascript.html',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
        },
      ],
    },
    {
      text:
        'How would you add an element to the end of an array in JavaScript?',
      answers: {
        a: 'array.push(element)',
        b: 'array.pop(element)',
        c: 'array.add(element)',
        d: 'array[array.length] = element',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'tutorialkart.com',
          href:
            'https://www.tutorialkart.com/javascript/how-to-add-an-element-at-the-end-of-array-in-javascript/',
        },
        {
          text: 'freecodecamp.org',
          href:
            'https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/',
        },
      ],
    },
  ],
};
