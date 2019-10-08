var userInput;

function replaceAt(index, replacement) {
    var wordPointer = document.getElementById("word");
    word = wordPointer.textContent;
    word[index] = replacement;
    console.log(word);
    wordPointer.textContent = word;
    console.log("function is called");

}

document.onkeyup = function(event) {
    userInput = event.key;

    var winPointer = document.getElementById("wins");

    var lettersGuessedPOinter = document.getElementById("lettersGuessed");

    if (userInput === 'n') {
        replaceAt(0, "n");
        console.log("n key pressed...");
    }
}
