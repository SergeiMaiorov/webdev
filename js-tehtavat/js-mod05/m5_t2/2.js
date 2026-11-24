const form = document.querySelector('#search-form');

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();
    const value = document.querySelector('#query').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});