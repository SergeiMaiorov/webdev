const dogs = [];

for (let i = 0; i < 6; i++) {
    const dog = prompt('Koirat nimet:');
    dogs.push(dog);
}

dogs.sort();
dogs.reverse();

const target = document.querySelector('#koirat');
for (let i = 0; i < dogs.length; i++) {
    target.innerHTML += `<li>${dogs[i]}</li>`;
}