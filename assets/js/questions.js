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

            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "Mandarin", correct: true },
            { text: "French", correct: false },

        ]
    },

    {
        question: "What country drinks the most coffee per capita?",
        answers: [

            { text: "South Korea", correct: false },
            { text: "Sweden", correct: false },
            { text: "Spain", correct: false },
            { text: "Finland", correct: true },

        ]
    }
];