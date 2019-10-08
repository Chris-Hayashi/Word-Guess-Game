var userInput;
var guesses = 13;

function replaceAt(index, replacement) {
    var wordPointer = document.getElementById("word");
    var word = wordPointer.textContent;
    word[index] = replacement;
    console.log(word);
    wordPointer.innerHTML = word;
    console.log("function is called");

}

document.onkeyup = function(event) {
    userInput = event.key;

    var winPointer = document.getElementById("wins");

    var lettersGuessedPOinter = document.getElementById("lettersGuessed");

    if (userInput === 'n') {
        replaceAt(0, 'n');
        console.log("n key pressed...");
    }
    else if (userInput === 'a') {
        replaceAt(2, 'a');
        console.log("a key pressed...");
    }
    else if (userInput === 'u') {
        replaceAt(4, 'u');
        replaceAt(12, 'u');
        console.log("u key pressed...");
    }
    else if (userInput === 't') {
        replaceAt(6, 't');
        console.log("t key pressed...");
    }
    else if (userInput === 'i') {
        replaceAt(8, 'i');
        console.log("i key pressed...");
    }
    else if (userInput === 'l') {
        replaceAt(10, 'l');
        console.log("l key pressed...");
    }
    else if (userInput === 's') {
        replaceAt(14, 's');
        console.log("s key pressed...");
    }

    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
}
