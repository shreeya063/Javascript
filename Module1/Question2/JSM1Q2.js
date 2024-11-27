let name = prompt("Provide your name, please: ");
console.log("Hello, " + name + "!");
target = name
document.querySelector('#target').innerHTML = `Hello, ${target}!`;
