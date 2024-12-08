 document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = document.getElementById('query').value;
    console.log(`Searching for: ${query}`);
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    console.log(`URL: ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log(`Search results:`, data);
    } catch (error) {
        console.log(error.message);
    }
 });