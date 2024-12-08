 document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.log(error.message);
    }
 });

function displayResult(shows) {
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    shows.forEach(tvShow => {
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = tvShow.show.name;
        h2.style.marginBottom = '10px';
        article.appendChild(h2);

        const link = document.createElement('a');
        link.href = tvShow.show.url;
        link.target = '_blank';
        link.textContent = 'More details';
        link.style.marginBottom = '10px';
        article.appendChild(link);

        const img = document.createElement('img');
        img.src = tvShow.show.image?.medium || 'https://via.placeholder.com/200x300?text=No+Image';
        img.alt = tvShow.show.name;
        link.style.marginBottom = '10px';
        link.style.padding = '10px';
        article.appendChild(img);

        const summaryDiv = document.createElement('div');
        summaryDiv.classList.add('summary');
        summaryDiv.innerHTML = tvShow.show.summary || 'No summary available;'
        link.style.marginTop = '10px';
        article.appendChild(summaryDiv);

        article.style.padding = '10px';
        article.style.marginBottom = '20px';

        resultDiv.appendChild(article);
    });
}