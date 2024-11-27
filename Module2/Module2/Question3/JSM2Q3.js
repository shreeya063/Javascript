function printNames() {
    let DogNames = [];

    for (let i = 0; i < 6; i++) {
        let userInput = prompt(`Enter the name of 6 dogs ${i + 1}:`);
        DogNames.push(userInput);
    }
    DogNames.sort();
    DogNames.reverse();

    let UnorderedList = '<ul>';
    DogNames.forEach(userInput => {
        UnorderedList += `<li>${userInput}</li>`;
    });
    UnorderedList += '</ul>';

    document.body.innerHTML += UnorderedList;
}
printNames();