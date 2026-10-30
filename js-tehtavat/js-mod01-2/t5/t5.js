const year = parseInt(prompt("Enter a year:"));
let text = "";

if (year % 400 === 0) {
    text = year + " is a leap year.";
} else if (year % 100 === 0) {
    text = year + " is not a leap year.";
} else if (year % 4 === 0) {
    text = year + " is a leap year.";
} else {
    text = year + " is not a leap year.";
}

document.querySelector("#target").innerHTML = text;