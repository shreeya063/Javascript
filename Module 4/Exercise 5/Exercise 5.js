async function norrisJokes() {
    console.log('Fetching a random Chuck Norris joke.... ');
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log('Random Chuck Norris Joke:',data.value);
    } catch (error) {
        console.log('Error fetching joke:', error.message);
    }
}

norrisJokes();