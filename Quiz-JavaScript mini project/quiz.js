const quizData = [
    {
        Question: "Which of the following is a linear data structure?",
        a: "Array",
        b: "AVL Tree",
        c: "Binary Tree",
        d: "Stack",
        correct: "a"
    },
    {
        Question: "How can we describe an array in the best possible way?",
        a: "The Array shows a hierarchical structure.",
        b: "Arrays are immutable.",
        c: "Container that stores the elements of similar types",
        d: "The Array is not a data structure",
        correct: "c"
    },
    {
        Question: "Which of the following is the infix expression?",
        a: "A+B*C",
        b: "+A*BC",
        c: "ABC+*",
        d: "None of the above",
        correct: "a"
    }
]



const totalAnswer = document.getElementById('quiz');
const question = document.getElementById('question');
const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const button = document.getElementById('submit');
let currData = 0;
let totalCorrectAnswers = 0; 

quiz();
button.addEventListener('click', submit);

function quiz() {
    const currQuizData = quizData[currData];
    question.innerHTML = currQuizData.Question;
    a.innerHTML = currQuizData.a;
    b.innerHTML = currQuizData.b;
    c.innerHTML = currQuizData.c;
    d.innerHTML = currQuizData.d;
}

function submit() {
    const currQuizData = quizData[currData];
    const selectedAnswer = document.querySelector('input[type="radio"]:checked');
    
    if (selectedAnswer) {
        if (selectedAnswer.id === currQuizData.correct) {
            totalCorrectAnswers++; 
        }

        currData++;
        selectedAnswer.checked = false;
        if (currData < quizData.length) {
            quiz();
        } else {
            totalAnswer.innerHTML = `<h2>${totalCorrectAnswers} Correct Answers Out Of ${quizData.length}</h2>`
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}
