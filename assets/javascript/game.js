var dashedWord;
var word = "nautilus";
var dashedWord;
var joinWord;
var wins = 0;
var guesses = 13;
var wordPointer = document.getElementById("word");
var winPointer = document.getElementById("wins");
var lettersGuessedPointer = document.getElementById("lettersGuessed");

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
    for (var i = 0; i < joinWord.length; i++) {
        if (joinWord[i] !== "_") {
            if (i === (joinWord.length - 1)){
                wins++;
                winPointer.textContent = wins;
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
    var charArray = word.split("");
    for(var i = 0; i < charArray.length; i++) {
        if (replacement === charArray[i].toLowerCase()) {
            replaceAt(i, replacement);
        }
    }
}

function lettersGuessed(letter) {
    var node = document.createElement("span");
    var letterGuessed = document.createTextNode(letter + " ");
    node.appendChild(letterGuessed);
    lettersGuessedPointer.appendChild(node);
}

document.onkeyup = function(event) {
    var userInput = event.key;
    console.log("user pressed key...");
    lettersGuessed(userInput);
    correctLetter(word, userInput);

    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
    if (guesses <= 0) {
        
    }
}

dashedWord(word);