// Declare variables

var words = ["redroom", "laurapalmer", "dalecooper", "audreyhorne", "BOB", "MIKE", "sherifftruman", "themanfromanotherplace", "theloglady"];
var winCount = 0;
var keyPress = "";
var currentWord;
var dummyWord = [];
var emptyWord = [];
var guessesMade = [];
var remainingGuesses;
// var alphabet = ["a", "b", "c", "d", "e", ]


// Randomly choose word to guess from array

function initialize() {
    currentWord = words[Math.floor(Math.random() * 9)];
    remainingGuesses = 15;
    const a = document.getElementById("guessesremain");
    a.innerHTML = 15 + "<br>";
    guessesMade.length = 0;
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
        emptyWord.push("-");
    }
    const z = document.getElementById("currentword");
    z.innerHTML = emptyWord.join(" ");
    console.log(emptyWord);
};

// Listen for key presses and store

document.onkeyup = function() {
    keyPress = event.key;
    console.log(keyPress);
};

// If not a valid letter press, ignore

// If a letter matches any letter in selected word, display it

// for (var i = 0; )




// If wrong letter chosen, letter guess counter goes down and wrong guess are displayed

// If word is correctly guessed, display word, image and play music; update win counter

// If word is not guessed, play fail sound

// On win or lose, load next word to guess automatically

initialize();