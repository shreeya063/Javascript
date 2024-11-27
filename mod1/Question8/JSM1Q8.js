let leapYearList = document.querySelector("#target");

const startYear = parseInt(prompt("Enter the starting year:"));
const endYear = parseInt(prompt("Enter the ending year:"));

if ( startYear > endYear) {
    alert("Please enter the years logically.");
} else {
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            let listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearList.appendChild(listItem);
        }
    }
    if (leapYearList.childNodes.length === 0) {
        let numLeapYearsItem = document.createElement("li");
        numLeapYearsItem.textContent = "No leap years in these years.";
        leapYearList.appendChild(numLeapYearsItem);
    }
}