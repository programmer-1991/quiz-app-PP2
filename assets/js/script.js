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
      question: "Which language has the more native speakers: English or Spanish?",
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

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    answerButtons.style.display = "block";
    questionPart.innerHTML = questionNumber + ". " + currentQuestion.question;
    //Your answers
    currentQuestion.answers.forEach((answer, index) => {
        const btn = answerButtons.children[index];
        btn.innerHTML = answer.text;
        btn.dataset.correct = answer.correct;
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
        btn.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const rightAnswer = selectedButton.dataset.correct === "true";
    if (rightAnswer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore() {
    questionPart.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButtons.style.display = "none";
    nextButton.innerHTML = "Play Again";
    //nextButton.style.display = "block";
}

function handleNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();