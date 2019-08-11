// Declare variables

var words = ["redroom", "laurapalmer", "dalecooper", "audreyhorne", "BOB", "MIKE", "sherifftruman", "themanfromanotherplace", "theloglady"];
var winCount = 0;
var keyPress = "";
var currentWord;
var dummyWord = [];
var emptyWord = [];
var guessesMade = [];
var remainingGuesses;

// Initialize audio element for win

var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/twinpeaks.mp3");

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

function setImage() {
    const z = document.getElementById("image");
    if (currentWord==="redroom") {
        z.src = "assets/images/redroom.jpg";
    }
    else if (currentWord==="laurapalmer") {
        z.src = "assets/images/laura.jpg";
    }
    else if (currentWord==="dalecooper") {
        z.src = "assets/images/dale.jpg";
    }
    else if (currentWord==="audreyhorne") {
        z.src = "assets/images/audrey.jpg";
    }
    else if (currentWord==="BOB") {
        z.src = "assets/images/bob.jpg";
    }
    else if (currentWord==="MIKE") {
        z.src = "assets/images/mike.jpg";
    }
    else if (currentWord==="sherifftruman") {
        z.src = "assets/images/sheriff.jpg";
    }
    else if (currentWord==="themanfromanotherplace") {
        z.src = "assets/images/another.jpg";
    }
    else if (currentWord==="theloglady") {
        z.src = "assets/images/log.jpg";
    }
};


initialize();

// Listen for key presses and store

document.onkeyup = function() {
    keyPress = event.key;
    audioElement.pause();

    // If a letter matches any letter in selected word, display it
    if (dummyWord.includes(keyPress)) {
        for (var i=0; i < dummyWord.length; i++) {
            if (keyPress===dummyWord[i]) {
                emptyWord[i] = dummyWord[i];
                const x = document.getElementById("currentword");
                x.innerHTML = emptyWord.join(" ");
            }
        }
        console.log("empty " + emptyWord.join() + "dummy " + dummyWord.join());

        // If word is correctly guessed, display word, image and play music; update win counter

        if (emptyWord.join()==dummyWord.join()) {
            winCount++;
            const x = document.getElementById("gamewins");
            x.innerHTML = winCount + "<br>";
            const y = document.getElementById("answer");
            y.innerHTML = currentWord + "<br><br>";
            setImage();
            audioElement.play();
            initialize();
        }
    }

    // If wrong letter chosen, letter guess counter goes down and wrong guesses are displayed

    else {
        if (!guessesMade.join().includes(keyPress)) {
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
    }
};

// On win or lose, load next word to guess automatically

initialize();