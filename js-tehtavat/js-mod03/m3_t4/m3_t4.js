const numbers = [];
let num = Number(prompt('Anna luku:'));

while (num !== 0) {
    numbers.push(num);
    num = Number(prompt('Anna luku:'));
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}