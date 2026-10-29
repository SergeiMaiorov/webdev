
const num1 = parseInt(prompt("Give first integer:"));
const num2 = parseInt(prompt("Give second integer:"));
const num3 = parseInt(prompt("Give third integer:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector("#target").innerHTML = 
    "Sum: " + sum + ", Product: " + product + ", Average: " + average;