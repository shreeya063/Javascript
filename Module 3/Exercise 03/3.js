'use strict';
const names = ['John', 'Paul', 'Jones'];

let listHTML = '';

for (let i = 0; i < names.length; i++) {
    listHTML += `<li>${names[i]}</li>`;
}

document.getElementById('target').innerHTML = listHTML;
