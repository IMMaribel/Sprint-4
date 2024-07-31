interface JokeResponse {
    id: string;
    joke: string;
    status: number;
}

interface JokeReport {
    joke: string;
    score: number;
    date: string;
}

let reportAcudits: JokeReport[] = []

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

function saveJoke(joke: string, score: number) {
    const JokeReport: JokeReport = {
        joke,
        score,
        date: new Date().toISOString()
    }


    const index = reportAcudits.findIndex(report => report.joke === joke);

    if (index !== -1) {
        reportAcudits[index] = JokeReport;
    } else {
        reportAcudits.push(JokeReport);
    }

    console.log(JokeReport);
}

document.getElementById('score1')?.addEventListener('click', () => {
    const joke = document.getElementById('jokeContainer')?.innerText || '';
    saveJoke(joke, 1);
});

document.getElementById('score2')?.addEventListener('click', () => {
    const joke = document.getElementById('jokeContainer')?.innerText || '';
    saveJoke(joke, 2);
});

document.getElementById('score3')?.addEventListener('click', () => {
    const joke = document.getElementById('jokeContainer')?.innerText || '';
    saveJoke(joke, 3);
});

document.getElementById('nextJokeButton')?.addEventListener('click', displayJoke);

window.onload = displayJoke;
