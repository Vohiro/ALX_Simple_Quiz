function checkAnswer () {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Welldone"
    } else {
        document.getElementById("feedback").textContent = "Incorrect Answer!"
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);