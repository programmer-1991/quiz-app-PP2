/*jshint esversion: 6 */
/*create a constant "questions" to add our questions and the options for the answers.*/
const questions = [
    {
    question: "How many minutes are in a full week? ",
        answers: [
            { text: "7500", correct: false },
            { text: "10080", correct: true },
            { text: "11000", correct: false },
            { text: "9800", correct: false },
        ],

    },

    {
      question: "What city is known as The Eternal City? ",
        answers: [

            { text: "Rome", correct: true },
            { text: "London", correct: false },
            { text: "New york", correct: false },
            { text: "Tokyo", correct: false },

        ]
    },
    {
      question: "Which planet has the most moons?",
        answers: [

            { text: "Venus", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },

        ]
    },

    {
      question: "Which language has the more native speakers?",
        answers: [

            { text: "Spanish", correct: true },
            { text: "English", correct: false },
            { text: "Chineese", correct: false },
            { text: "Frensh", correct: false },

        ]
    },

    {
      question: "What country drinks the most coffee per capita?",
        answers: [

            { text: "South Korea", correct: false},
            { text: "Sweden", correct: false},
            { text: "Spain", correct: false},
            { text: "Finland", correct: true},

        ]
    }
];

/*add variables for id "question" "answer-buttons" "next-button"*/
const questionPart = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

/*create variables questionIndex and score*/
let questionIndex = 0;
let score = 0;

//startQuiz function
function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//showQuestion function
function showQuestion() {
    //Show your question
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    answerButtons.style.display = "block";
    questionPart.innerHTML = questionNumber + ". " + currentQuestion.question;
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
    nextButton.style.display = "block";
}

//showScore function
function showScore() {
    questionPart.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButtons.style.display = "none";
    nextButton.innerHTML = "Play Again";
}

//When we click on the next button
function againNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

//Here starts the program

//When the user clicks the next button we check
//if there are questions left
nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        againNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();