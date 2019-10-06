var userInput;
var winPointer = document.getElementById("wins");
var wordPointer = document.getElementById("word");
var lettersGuessedPOinter = document.getElementById("lettersGuessed");

document.onkeyup = function(event) {
    userInput = event.key;

    if (userInput === 'n') {
        wordPointer.textContent = wordPointer.replace([0], n);
    }
}
