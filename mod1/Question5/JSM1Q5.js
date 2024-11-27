
function checkLeapYear() {
    let year = parseInt(prompt("Enter a year: "));
    if ((year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)) {
        alert('Given year is a leap year.');
    }
    else {
        alert('Given year is not a leap year.');
    }
}


checkLeapYear();