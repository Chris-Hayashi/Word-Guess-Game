var dashedWord;
var word = "nautilus";
var dashedWord;
var joinWord;
var guesses = 13;
var wordPointer = document.getElementById("word");

function dashedWord(chosenWord) {
    dashedWord = chosenWord.split("");
    for (var i = 0; i < dashedWord.length; i++) {
        dashedWord[i] = "_";
    }
    joinWord = dashedWord.join(" ");
    wordPointer.innerHTML = joinWord;
}

function replaceAt(index, replacement) {
    dashedWord[index] = replacement;
    joinWord = dashedWord.join(" ");
    wordPointer.innerHTML = joinWord;
}

function correctLetter(chosenWord, replacement) {
    console.log("correctLetter() function called...");
    var charArray = word.split("");
    for(var i = 0; i < charArray.length; i++) {
        if (replacement === charArray[i].toLowerCase()) {
            replaceAt(i, replacement);
        }
    }
}
dashedWord(word);

document.onkeyup = function(event) {
    var userInput = event.key;
    console.log("user pressed key...");
    correctLetter(word, userInput);

    var winPointer = document.getElementById("wins");

    var lettersGuessedPOinter = document.getElementById("lettersGuessed");
    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
}
