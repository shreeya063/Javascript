function concat(array) {
    let result = '';
    for (let i = 0; i<array.length; i++) {
        result += array[i];
    }
    return result;
}

let namesArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let concatenatedString = concat(namesArray);

document.body.innerHTML = `<h1>Output after concatenation: </h1><p>${concatenatedString}</p>`;