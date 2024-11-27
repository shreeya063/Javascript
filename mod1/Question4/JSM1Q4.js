const name = prompt("Enter your name for the class assignment: ");
let room = Math.floor(Math.random()*4+1);
let house;

switch (room) {
    case 1:
        house = "Gryffindor";
        break;

    case 2:
        house = "Slytherin";
        break;

    case 3:
        house = "Hufflepuff";
        break;

    case 4:
        house = "Ravenclaw";
        break;
}

document.querySelector('#target').innerHTML = `${name}, you are "${house}".`;