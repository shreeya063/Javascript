//In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and
// Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic
//sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the
// program prints to the HTML document "Anna, you are Ravenclaw." (3p)
// Use math.random() to draw a value (1, 2, 3 or 4)
// Once the number is drawn, you need to use a multiple choice structure (if, else if, ..., else or switch).

let name = prompt('Enter your name.');
let room;
let randomValue = Math.floor(Math.random()*4+1);
{
if (randomValue === 1) { room = 'Gryffindor'; }
else if (randomValue === 2) { room = 'Slytherin'; }
else if (randomValue === 3) { room = 'Hufflepuff'; }
else { room = 'Ravenclaw'; }
}
document.body.innerHTML = `${name}, you are ${room}.`;