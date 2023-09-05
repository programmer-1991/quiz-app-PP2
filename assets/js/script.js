/*jshint esversion: 6 */
//import {questions} from "./js/questions"

/*add variables for id "question" "answer-buttons" "next-button" "game"*/
const questionPart = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const gameArea = document.getElementById("game");

/*create variables questionIndex, quizIndex, score and quizGame array*/
let questionIndex;
let quizIndex;
let score;
let quizGame = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//startQuiz function
function startQuiz() {
    questionIndex = -1;
    quizIndex = 0;
    score = 0;
    quizGame = [];
    let currentQuestions = questions.slice();

    for (i = 0; i < 5; i++) {
        quizIndex = getRandomInt(currentQuestions.length);
        quizQuestion = currentQuestions[quizIndex];
        currentQuestions.splice(quizIndex, 1);
        quizGame.push(quizQuestion);
    }
    score = 0;
    showRules();
    gameArea.hidden = false;
}

//ShowRules function to show rules to the user
function showRules() {
    gameArea.classList.add("rules");
    rules = {
        question: "Rules",
        answers: [{
            text: "1- You have to choose an option to move on to the next question."
        },
        {
            text: "2- When you choose an answer you can not regret it."
        },
        {
            text: "3- You have to get at least 3 of 5 right answers to pass the game."
        },
        {
            text: "4- You can play again and get different questions."
        },
        ]
    };
    questionPart.innerHTML = rules.question;
    rules.answers.forEach((answer, index) => {
        const btn = answerButtons.children[index];
        btn.classList.remove("correct", "incorrect");
        btn.innerHTML = answer.text;
        btn.disabled = true;
    });
    answerButtons.hidden = false;
    nextButton.innerHTML = "Play";
}

//showQuestion function
function showQuestion() {
    //Show your question
    let currentQuestion = quizGame[questionIndex];
    gameArea.classList.remove("rules");
    answerButtons.hidden = false;
    nextButton.style.visibility = 'hidden';
    questionPart.innerHTML = questionIndex + 1 + ". " + currentQuestion.question;

    //Show your answers
    currentQuestion.answers.forEach((answer, index) => {
        const btn = answerButtons.children[index];
        btn.innerHTML = answer.text;
        btn.dataset.correct = answer.correct;
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
        //The user chooses an answer
        btn.addEventListener("click", selectAnswer);
    });
}

//showScore function
function showScore() {
    questionPart.innerHTML = `You scored ${score} out of 5!`;
    answerButtons.hidden = true;
    nextButton.innerHTML = "Play Again";
}

//selectAnswer function
function selectAnswer(a) {
    const selectedButton = a.target;
    const rightAnswer = selectedButton.dataset.correct === "true";
    //we check if the answer is right
    if (rightAnswer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    //The computer finds the right answer and 
    //disables the answer buttons
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.visibility = 'visible';
}

//When we click on the next button
function againNextButton() {
    if (++questionIndex < quizGame.length) {
        showQuestion();
    } else {
        showScore();
    }
}

//Here starts the program
//When the user clicks the next button we check
//if there are questions left
nextButton.addEventListener("click", () => {
    if (questionIndex < quizGame.length) {
        againNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();