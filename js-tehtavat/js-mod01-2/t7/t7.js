const rolls = parseInt(prompt("How many dice rolls?"));
let sum = 0;

for (let i = 0; i < rolls; i++) {
    const die = Math.floor(Math.random() * 6) + 1;
    sum = sum + die;
}

document.querySelector("#target").innerHTML = "Sum of dice rolls: " + sum;
const rolls = parseInt(prompt("How many dice rolls?"));
let sum = 0;

for (let i = 0; i < rolls; i++) {
    const die = Math.floor(Math.random() * 6) + 1;
    sum = sum + die;
}

document.querySelector("#target").innerHTML = "Sum of dice rolls: " + sum;