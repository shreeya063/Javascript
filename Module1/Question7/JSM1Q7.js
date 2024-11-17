function diceRoll() {
    let no_of_rolls = prompt("Enter how many times you want to roll the dice.");
    no_of_rolls = parseInt(no_of_rolls);

    if (isNaN(no_of_rolls) || no_of_rolls <= 0) {
        document.body.innerHTML = "Please enter a positive number for the times you want to roll the dice. ";
        return;
    }

    let sum = 0;

    for (let i = 0; i < no_of_rolls; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll
    }

    document.body.innerHTML = `The sum of the results of rolling the dice ${no_of_rolls} times is ${sum}. `
}

diceRoll()