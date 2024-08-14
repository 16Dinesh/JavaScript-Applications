let startGame = document.getElementById('startGame')

startGame.addEventListener('click', function() {
    const maxNumberInput = document.getElementById('maxNumber');
    const max = parseInt(maxNumberInput.value);
    if (!isNaN(max) && max > 0) {
        const maxNumber = Math.floor(Math.random() * max) + 1;
        //console.log(maxNumber); //for answer

        const guessSection = document.getElementById('guessSection');
        guessSection.style.display = 'block';

        document.getElementById('submitGuess').addEventListener('click', function() {
            const guessInput = document.getElementById('guess');
            const guess = parseInt(guessInput.value);
            const feedback = document.getElementById('feedback');
            
            if (isNaN(guess)) {
                feedback.textContent = 'Please enter a valid number.';
            } else if (guess === maxNumber) {
                feedback.textContent = `Congratulations! You guessed it right. The number was ${maxNumber}.`;
            } else if (guess < maxNumber) {
                feedback.textContent = 'Hint: Your number is too small. Try again with a larger number.';
            } else {
                feedback.textContent = 'Hint: Your number is too big. Try again with a smaller number.';
            }
        });
    } else {
        alert('Please enter a valid maximum number.');
    }
});