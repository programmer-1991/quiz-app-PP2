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

            { text: "answer8", correct: true },
            { text: "answer8", correct: true },
            { text: "answer8", correct: true },
            { text: "answer8", correct: true },

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
    nextButton.style.display = "none";
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionPart.innerHTML = questionNumber + ". " + currentQuestion.question;
    //Your answers
    currentQuestion.answers.forEach((answer, index, array) => {
        const btn = answerButtons.children[index];
        btn.innerHTML = answer.text;
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const rightAnswer = selectedButton.dataset.correct === "true";
    if (rightAnswer) {
        selectedButton.classList.add("correct");
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

startQuiz();