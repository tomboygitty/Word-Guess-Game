// Declare variables

var words = ["redroom", "laurapalmer", "dalecooper", "audreyhorne", "BOB", "MIKE", "sherifftruman", "themanfromanotherplace", "theloglady"];
var winCount = 0;
var keyPress = "";
var currentWord;
var dummyWord = [];
var emptyWord = [];
var guessesMade = [];
var remainingGuesses;


// Initialize variables, display on page properly

function initialize() {
    dummyWord.length = 0;
    emptyWord.length = 0;
    guessesMade.length = 0;

    // Randomly choose word to guess from array

    currentWord = words[Math.floor(Math.random() * 9)];
    remainingGuesses = 15;
    const a = document.getElementById("guessesremain");
    a.innerHTML = 15 + "<br>";
    for (var i = 0; i < currentWord.length; i++) {
        dummyWord[i] = currentWord.charAt(i).toLowerCase();
    }
    console.log(dummyWord);
    const x = document.getElementById("currentword");
    x.innerHTML = "<br>" + emptyWord + "<br>";
    console.log(x.innerHTML);
    const y = document.getElementById("lettersguessed");
    y.innerHTML = "<br>";
    displayBlank();
};

function displayBlank() {
    for (var i=0; i < currentWord.length; i++) {
        emptyWord.push("_");
    }
    const z = document.getElementById("currentword");
    z.innerHTML = emptyWord.join(" ");
    console.log(emptyWord);
};


initialize();

// Listen for key presses and store

document.onkeyup = function() {
    keyPress = event.key;

    // If a letter matches any letter in selected word, display it
    if (dummyWord.includes(keyPress)) {
        for (var i=0; i < dummyWord.length; i++) {
            if ((keyPress===dummyWord[i])&&(keyPress!=emptyWord[i])) {
                emptyWord[i] = dummyWord[i];
                const x = document.getElementById("currentword");
                x.innerHTML = emptyWord.join(" ");
            }
        }
        console.log("empty " + emptyWord.join() + "dummy " + dummyWord.join());
        if (emptyWord.join()==dummyWord.join()) {
            winCount++;
            const x = document.getElementById("gamewins");
            x.innerHTML = winCount + "<br>";
            const y = document.getElementById("answer");
            y.innerHTML = currentWord + "<br><br>";
            const z = document.getElementById("image");
            z.
            initialize();
        }
    }

    // If wrong letter chosen, letter guess counter goes down and wrong guesses are displayed

    else {
        if (remainingGuesses!=0) {
            guessesMade.push(keyPress);
            const g = document.getElementById("lettersguessed");
            g.innerHTML = guessesMade.join(" ");
            remainingGuesses = remainingGuesses - 1;
            const x = document.getElementById("guessesremain");
            x.innerHTML = remainingGuesses + "<br>";
        }
        else {
            initialize();
            return;
        }
    }
};

// If word is correctly guessed, display word, image and play music; update win counter

// If word is not guessed, play fail sound

// On win or lose, load next word to guess automatically

initialize();