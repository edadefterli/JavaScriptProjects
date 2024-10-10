let randomNumber = Math.floor(Math.random()*101);
let attempts = 0;

function checkGuess(){

    const userGuess = document.getElementById('guessInput').value;
    attempts++;

    if(randomNumber == userGuess){
        alert(`Congratulations! You guessed right. Number is ${randomNumber}. You made a total of ${attempts} attemps.`);
        let result = confirm("Game over. Let's play again!");
        if(true){
            location.reload();
        }

    }else if(randomNumber>userGuess){
        alert("You should have guessed a larger number.");
    }else{
        alert("You should have guessed a smaller number.");
    }
}

