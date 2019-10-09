var userInput;
var dashedWord;
var joinWord;
var word = "nautilus"
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
    console.log("dashedWord: " + dashedWord);
    joinWord = dashedWord.join(" ");
    console.log("joinWord: " + joinWord);
    console.log("replaceAt() function called");
    wordPointer.innerHTML = joinWord;
}
dashedWord(word);

document.onkeyup = function(event) {
    userInput = event.key;

    var winPointer = document.getElementById("wins");

    var lettersGuessedPOinter = document.getElementById("lettersGuessed");

    if (userInput === 'n') {
        console.log("n key pressed...");
        replaceAt(0, 'n');
    }
    else if (userInput === 'a') {
        replaceAt(1, 'a');
        console.log("a key pressed...");
    }
    else if (userInput === 'u') {
        replaceAt(2, 'u');
        replaceAt(6, 'u');
        console.log("u key pressed...");
    }
    else if (userInput === 't') {
        replaceAt(3, 't');
        console.log("t key pressed...");
    }
    else if (userInput === 'i') {
        replaceAt(4, 'i');
        console.log("i key pressed...");
    }
    else if (userInput === 'l') {
        replaceAt(5, 'l');
        console.log("l key pressed...");
    }
    else if (userInput === 's') {
        replaceAt(7, 's');
        console.log("s key pressed...");
    }

    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
}
