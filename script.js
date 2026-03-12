// script.js

async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();

    if (data.setup && data.delivery) {
        console.log(`Joke: ${data.setup} - ${data.delivery}`);
    } else if (data.joke) {
        console.log(`Joke: ${data.joke}`);
    }
}

fetchJoke();