
const luvut = [];

for (let i = 0; i < 5; i++) {
    const syote = Number(prompt(`Anna ${i + 1}. luku:`));
    luvut.push(syote);
}

for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i]);
}