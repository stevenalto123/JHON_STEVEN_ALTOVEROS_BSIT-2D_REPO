var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

// game logic

while (isSunk == false) {
    guess = prompt("Ready! , Aim! , Fire! 🔥 (Enter number 0-6)");
    
    if (GUESS == null) {
        alert("Thank youuu for Everything!");
        break;
    }

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number@!")
    } else {
        guesses = guess + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("hits! 🚢");

            if (hits == 3) {
                isSunk = true;
                alert("you sank my battleship!🥺🥺");
            }
        
        } else {
            alert("Miss!");
        }

    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0). toFixed(2);

var status = "you took " + guesses + "guesses to sink the battleship!" + "\n" + "accuracy:" + accuracy + "%";

alert(stats);

