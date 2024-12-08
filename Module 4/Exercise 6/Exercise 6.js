  document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        displayResult(data.result);
    } catch (error) {
        console.log(error.message);
    }
});

function displayResult(jokes) {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    if (jokes.length === 0) {
        resultDiv.innerHTML = '<p>No jokes found for this search term.</p>'
        return;
    }
    jokes.forEach(joke => {
        const article = document.createElement('article');

        const p = document.createElement('p');
        p.textContent = joke.value;
        p.style.marginBottom = '10px';

        article.appendChild(p);
        article.style.padding = '10px';

        resultDiv.appendChild(article);
    });
}
