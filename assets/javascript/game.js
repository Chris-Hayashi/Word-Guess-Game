var dashedWord;
var words = ["nautilus", "kraken", "davyjones"];
var currentWord;
var dashedWord;
var joinWord;
var wins = 0;
var guesses = 13;
var wordPointer = document.getElementById("word");
var winPointer = document.getElementById("wins");
var lettersGuessedPointer = document.getElementById("lettersGuessed");
var messagePointer = document.getElementById("message");

function dashedWord(chosenWord) {
    dashedWord = chosenWord.split("");
    if (dashedWord.length > chosenWord.length) {
        dashedWord.splice(chosenWord.length, dashedWord.length - chosenWord.length);
    }
    for (var i = 0; i < dashedWord.length; i++) {
        dashedWord[i] = "_";
    }
    joinWord = dashedWord.join(" ");
    wordPointer.textContent = joinWord;
}

function replaceAt(index, replacement) {
    dashedWord[index] = replacement;
    joinWord = dashedWord.join(" ");
    wordPointer.innerHTML = joinWord;
    for (var i = 0; i < joinWord.length; i++) {
        if (joinWord[i] !== "_") {
            if (i === (joinWord.length - 1) && messagePointer.textContent !== "Congratulations!!! You Win!!!"){
                wins++;
                winPointer.textContent = wins;
                messagePointer.textContent = "Congratulations!!! You Win!!!";
                guesses = 13;
                document.getElementById("guesses").innerHTML = guesses;
                break;
            }
            continue;
        }
        else {
            break;
        }

    }
}

function correctLetter(chosenWord, replacement) {
    console.log("correctLetter() function called...");
    var charArray = currentWord.split("");
    for(var i = 0; i < charArray.length; i++) {
        if (replacement === charArray[i].toLowerCase()) {
            replaceAt(i, replacement);
        }
    }
}

function lettersGuessed(letter) {
    for (var i = 0; i < lettersGuessedPointer.textContent.length; i++) {
        if (lettersGuessedPointer.textContent[i] === letter)
            return;
    }
    var node = document.createElement("span");
    var letterGuessed = document.createTextNode(letter + "  ");
    node.appendChild(letterGuessed);
    lettersGuessedPointer.appendChild(node);
}

document.onkeyup = function(event) {
    var userInput = event.key;
    
    lettersGuessed(userInput);
    correctLetter(currentWord, userInput);

    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
    if (guesses == 0) {
        messagePointer.textContent = "You Lose!!! You ran out of guesses!";
        guesses = 13;
        document.getElementById("guesses").innerHTML = guesses;
    }
}

    // for (var i = 0; i < words.length; i++) {
    //     var done = false;
    currentWord = words[Math.floor(Math.random() * words.length)];
    dashedWord(currentWord);


    