/*create a constant "questions" to add our questions and the options for the answers.*/ 
const questions = [
    {
        question: "question-1",
        answers: [
            { text: "answer1", correct: false },
            { text: "answer2", correct: true },
            { text: "answer3", correct: false },
            { text: "answer4", correct: false },
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

