function diceRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function mainProgram() {
    const createList = document.getElementById('target');
    const sides = parseInt(prompt('Enter number of sides on the dice: '), 10);
    let roll;
    let rollResult = '';

    if (isNaN(sides) || sides <= 0) {
        alert('Invalid input! Please enter valid number.');
        return;
    }

    do {
        roll = diceRoll(sides);
        rollResult += `<li>Result of this roll: ${roll}</li>`;
    } while (roll !== sides);

    rollResult += `<li>Hurray! Maximum value of ${roll} achieved.</li>`;
    createList.innerHTML = rollResult
}

mainProgram();
