const count = Number(prompt('Osallistujien lukumäärä:'));
const names = [];

for (let i = 0; i < count; i++) {
    const name = prompt('Osallistujan nimi:');
    names.push(name);
}

names.sort();

const target = document.querySelector('#participants');
for (let i = 0; i < names.length; i++) {
    target.innerHTML += `<li>${names[i]}</li>`;
}