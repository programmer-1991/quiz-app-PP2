/*create a constant "questions" to add our questions and the options for the answers.*/
const questions = [
    {
        question: "question-1",
        answers: [
            { text: "answer3", correct: false },
            { text: "answer3", correct: true },
            { text: "answer3", correct: false },
            { text: "answer3", correct: false },
        ],

    },

    {
        question: "question-2",
        answers: [

            { text: "answer5", correct: true },
            { text: "answer5", correct: false },
            { text: "answer5", correct: false },
            { text: "answer5", correct: false },

        ]
    },
    {
        question: "question-3",
        answers: [

            { text: "answer6", correct: false },
            { text: "answer6", correct: false },
            { text: "answer6", correct: false },
            { text: "answer6", correct: true },

        ]
    },

    {
        question: "question-4",
        answers: [

            { text: "answer7", correct: true },
            { text: "answer7", correct: false },
            { text: "answer7", correct: false },
            { text: "answer7", correct: false },

        ]
    },

    {
        question: "question-5",
        answers: [

            { text: "answer8", correct: false},
            { text: "answer8", correct: false},
            { text: "answer8", correct: false},
            { text: "answer8", correct: true},

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