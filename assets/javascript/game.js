// Creates an array that lists out all of the words.
var letters = [
    "a", "h", "l"
]


// Creating variables to hold the number of wins, guessed remaining, and letters Already used. They start at 0 or set guesses left at 9.
var wins = 0;
var losses = 0;
var guessesLeft = 9;







// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;


   
    // Randomly chooses a choice from the options array.
    var letterGuessed = letters[Math.floor(Math.random() * letters.length)];


    // This logic determines the outcome of the game (win/loss/guessesleft), and increments/decrements the appropriate number

    for (var i = 0; i < letters.length; i++) {

        if ((userGuess === letters[i]) && (letterGuessed === letters[i])) {
            wins++;
        } else if ((userGuess !== letters[i]) && (letterGuessed === letters[i])) {
            losses++;
            guessesLeft--;
        } 

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guesses left.
        var html =
            "<h1 id='h1html'>Guess what letter I'm thinking of" + "</h1>" + "<br>" +
            "<p>Wins: " + wins + "</p>" + "<br>" +
            "<p>Losses: " + losses + "</p>" + "<br>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" + "<br>" +
            "<p>Guesses So Far: " + userGuess + "</p>"


        // Set the inner HTML contents of the #psychic div to our html string

        document.querySelector("#psychic").innerHTML = html;

        if (guessesLeft === 0) {
          alert("New game!")
          wins = 0;
          losses = 0;
          guessesLeft = 9;
          break;
        }

    }
}