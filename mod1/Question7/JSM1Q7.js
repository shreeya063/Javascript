function diceRoll() {
    let num_of_rolls = parseInt(prompt("Enter the number times you want to roll the dice: "));

    if (isNaN(num_of_rolls) || num_of_rolls <= 0) {
        document.body.innerHTML = "Please, enter a valid times you want to roll the dice.";
        return;
    }

    let sum = 0;

    for (let i = 0; i < num_of_rolls; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll
    }

    document.body.innerHTML = `The sum of the results of rolling the dice ${num_of_rolls} times is ${sum}.`;
}

diceRoll()