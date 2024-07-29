interface JokeResponse {
    id: string;
    joke: string;
    status: number;
}

async function fetchJoke(): Promise<string> {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' }
    });
    const data: JokeResponse = await response.json();
    return data.joke;
}

async function displayJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    const joke = await fetchJoke();
    if (jokeContainer) {
        jokeContainer.innerText = joke;
        console.log(joke);
    }
}

document.getElementById('nextJokeButton')?.addEventListener('click', displayJoke);

window.onload = displayJoke;
