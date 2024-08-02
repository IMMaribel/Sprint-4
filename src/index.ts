interface JokeResponse {
    joke: string;
}

interface JokeReport {
    joke: string;
    score: number;
    date: string;
}

interface WeatherResponse {
    currentConditions: {
        temp: number;
        conditions: string;
    };
}

let reportAcudits: JokeReport[] = []

async function fetchJoke(): Promise<string> {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' }
    });
    const data: { joke : string } = await response.json();
    return data.joke;
}

async function fetchChuckNorrisJoke(): Promise<string> {
    const response = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: { 'Accept': 'application/json' }
    });
    const data: { value: string } = await response.json();
    return data.value;
}

async function fetchRandomJoke(): Promise<string> {
    const random = Math.random();
    if (random < 0.5) {
        return await fetchJoke();
    } else {
        return await fetchChuckNorrisJoke();
    }
}

async function displayJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    const joke = await fetchRandomJoke();
    if (jokeContainer) {
        jokeContainer.innerText = joke;
        console.log(joke);
    }
}
document.getElementById('nextJokeButton')?.addEventListener('click', displayJoke);

window.onload = displayJoke;

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


  
async function fetchWeather(): Promise<WeatherResponse> {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Barcelona?unitGroup=metric&key=TT78V593MDZKGXUUNJEGXJATD&contentType=json", {
        headers: { 'Accept': 'application/json' }
    });
    return await response.json();
}


async function displayWeather() {
    const weatherContainer = document.getElementById('weatherContainer');
    const weatherData = await fetchWeather();
    const weatherInfo = `Current Temperature: ${weatherData.currentConditions.temp}°C, Conditions: ${weatherData.currentConditions.conditions}`;
    if (weatherContainer) {
        weatherContainer.innerText = weatherInfo;
        console.log(weatherInfo);
    }
}

displayWeather()