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
  // the questions in the quiz
    questions: [
    {
      text: '1.	What is JavaScript used for?',
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
          href: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#summary',
        },
        {
          text: 'Future Learn',
          href: 'https://www.futurelearn.com/info/blog/what-is-javascript-used-for',
        },
      ],
    },
    {
      text: '2.	Which of the following is NOT a data type in JavaScript? ',
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
          href: 'https://www.electricalexams.co/following-is-not-a-javascript-data-types/',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
        },
      ],
    },
    {
      text: '3.	What is the syntax for declaring a variable in JavaScript? ',
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
          href: 'https://www.tutorialsteacher.com/javascript/javascript-variable',
        },
      ],
    },
    {
      text: '4.	What is the difference between == and === in JavaScript?',
      answers: {
        a: '== checks value equality and === checks value and type equality',
        b: '== checks type equality and === checks value equality',
        c: 'They both check value equality only',
        d: 'They both check type equality only',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'codesolutionstuff.com',
          href: 'https://www.codesolutionstuff.com/difference-between-double-equals-and-triple-equals-in-javascript/',
        },
        {
          text: 'Scaler Topics',
          href: 'https://www.scaler.com/topics/javascript/difference-between-double-equals-and-triple-equals-in-javascript/',
        },
      ],
    },
    {
      text: '5.	How do you add an element to the end of an array in JavaScript?',
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
          href: 'https://www.freecodecamp.org/news/javascript-array-insert-how-to-add-to-an-array-with-the-push-unshift-and-concat-functions/',
        },
      ],
    },
    {
      text: '6.	What is the difference between null and undefined in JavaScript?',
      answers: {
        a: 'null is an assignment value, undefined means a variable has been declared but has not been assigned a value.',
        b: 'undefined is an assignment value, null means a variable has been declared but has not been assigned a value',
        c: 'both null and undefined are the same in JavaScript',
             },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'levelup.gitconnected.com',
          href: 'https://levelup.gitconnected.com/javascript-null-vs-undefined-2acda986f79f',
        },
        {
          text: 'geeksforgeeks.org',
          href: 'https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/',
        },
      ],
    },
    {
      text: '7.	Which of the following is a way to declare a function in JavaScript?',
      answers: {
        a: 'var myFunction = function() {}',
        b: 'function myFunction() {}',
        c: 'both A and B',
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
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function',
        },
      ],
    },
    {
      text: '8. What is closure in JavaScript?',
      answers: {
        a: 'An inner function that has access to the outer (enclosing) functions variables',
        b: 'A way to prevent the value of a variable from being changed',
        c: 'A special syntax for declaring a function',
        
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        },
        {
          text: 'w3schools.com',
          href: 'https://www.w3schools.com/js/js_function_closures.asp',
        },
      ],
    },
    {
      text: '9. Which of the following is a way to loop through an array in JavaScript?',
      answers: {
        a: 'for(i = 0; i < myArray.length; i++)',
        b: 'while(myArray.length > 0)',
        c: 'do while(myArray.length > 0)',
              },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3docs.com',
          href: 'https://www.w3docs.com/snippets/javascript/how-to-loop-through-an-array-in-javascript.html',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
        },
      ],
    },
    {
      text: '10.	How would you add an element to the end of an array in JavaScript?',
      answers: {
        a: 'array.push(element)',
        b: 'array.pop(element)',
        c: 'array.add(element)',
            },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'tutorialkart.com',
          href: 'https://www.tutorialkart.com/javascript/how-to-add-an-element-at-the-end-of-array-in-javascript/',
        },
        {
          text: 'freecodecamp.org',
          href: 'https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/',
        },
      ],
    },
  ],
};