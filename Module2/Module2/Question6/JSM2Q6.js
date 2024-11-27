function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function mainProgram() {
    const createList = document.getElementById('target');
    let roll;
    let rollResult = '';

    do {
        roll = diceRoll();
        rollResult += `<li>Result of this roll: ${roll}</li>`;
    } while (roll !== 6);

    createList.innerHTML = rollResult
}

mainProgram();
