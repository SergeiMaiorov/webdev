const form = document.querySelector('#joke-form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    const value = document.querySelector('#query').value;
    results.innerHTML = '';

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value}`);
        const jsonData = await response.json();

        for (let i = 0; i < jsonData.result.length; i++) {
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.innerText = jsonData.result[i].value;
            article.appendChild(p);
            results.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    }
});