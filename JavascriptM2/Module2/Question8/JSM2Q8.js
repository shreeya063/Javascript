//Write a function called concat(), which receives an array of strings as a parameter. The function returns a string formed by concatenating the elements of the array. (2p)
// Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
// Do not use array.join() function
// You can hardcode the array, no need for prompt().
//Print the result to HTML document.
function concat(stringsArray) {
    let concatenatedString = "";
    for (let index = 0; index < stringsArray.length; index++) {
        concatenatedString = concatenatedString + stringsArray[index];
    }
    return concatenatedString;
}

let myStrings = ["Johnny", "DeeDee", "Joey", "Marky"];

let arrayListElement = document.getElementById("arrayList");
for (let i = 0; i < myStrings.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = myStrings[i];
    arrayListElement.appendChild(listItem);
}

let result = concat(myStrings);

let resultElement = document.getElementById("result");
resultElement.textContent = result;