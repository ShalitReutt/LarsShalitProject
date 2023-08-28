document.addEventListener('DOMContentLoaded', function () {
    const exercises = [
        { question: '5 + 10', answer: 15 },
        { question: '2 * 3', answer: 6 },
        { question: '20 / 2', answer: 10 },
        { question: '2 - 3', answer: -1 },
        { question: '5 % 2', answer: 1 }
    ];

    const exCountElement = document.getElementById('exCount');
    const rightAnswersElement = document.getElementById('rightAnswers');
    const instructionElement = document.getElementById('instruction');
    const exerciseElement = document.querySelector('.exercise');
    const inputElement = document.querySelector('input');
    const submitButton = document.querySelector('button');
    const resetButton = document.getElementById('resetButton');

    let currentExercise = 0;
    let correctAnswers = 0;

    function displayNextExercise() {
        if (currentExercise < exercises.length) {
            const exercise = exercises[currentExercise];
            exerciseElement.textContent = exercise.question;
            inputElement.value = '';
            instructionElement.textContent = 'Solve this math exercise';
            exCountElement.textContent = `Exercises left: ${exercises.length - currentExercise}`;
        } else {
            exCountElement.textContent = `Total exercises: ${exercises.length}`;
            rightAnswersElement.textContent = `Correct answers: ${correctAnswers}`;
            instructionElement.textContent = '';

            if (correctAnswers === exercises.length) {
                rightAnswersElement.textContent = `Correct answers: ${correctAnswers}!!!`;
                confetti()
            }
        }
    }

    function checkAnswer(userAnswer) {
        const exercise = exercises[currentExercise];
        if (parseInt(userAnswer) === exercise.answer) {
            correctAnswers++;
        }
        currentExercise++;
        displayNextExercise();
    }

    submitButton.addEventListener('click', function () {
        const userAnswer = inputElement.value;
        if (userAnswer.trim() === '') {
            alert('Please enter an answer.');
        } else if (isNaN(userAnswer)) {
            alert('Please enter a valid number.');
        } else {
            checkAnswer(userAnswer);
        }

        
    });

    function resetGame() {
        currentExercise = 0;
        correctAnswers = 0;
        rightAnswersElement.textContent = '';
        displayNextExercise();
    }

    resetButton.addEventListener('click', resetGame);

    displayNextExercise();
});