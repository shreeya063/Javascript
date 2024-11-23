//Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function
// you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling
// in the main program continues until the program gets the maximum number on the dice, which is asked from the user
// at the beginning. (2p)
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function main() {
    let sides = parseInt(prompt("Enter the number of sides on the dice:"), 10);
    while (isNaN(sides) || sides < 1) {
        alert("Please enter a valid positive number.");
        sides = parseInt(prompt("Enter the number of sides on the dice:"), 10);
    }

    let roll;
    const results = [];


    do {
        roll = rollDice(sides);
        results.push(roll);
    } while (roll !== sides);


    console.log(`Dice rolls with a ${sides}-sided dice:`);
    results.forEach(function(result, index) {
        console.log(`Roll ${index + 1}: ${result}`);
    });
}


main();
