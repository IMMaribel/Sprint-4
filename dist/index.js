"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
let reportAcudits = [];
const backgrounds = [
    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M736.5 592q-130.5 92-261 134t-159-92q-28.5-134-11-287t195-154.5q177.5-1.5 272 153t-36 246.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23c345f7%22 d=%22M736.5 592q-130.5 92-261 134t-159-92q-28.5-134-11-287t195-154.5q177.5-1.5 272 153t-36 246.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M926.5 629Q855 758 749 848.5T525.5 861Q408 783 311 745T204.5 603.5Q195 500 189 385t120.5-99q126.5 16 226-93.5T707 190q72 107 181.5 208.5t38 230.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%239845f7%22 d=%22M926.5 629Q855 758 749 848.5T525.5 861Q408 783 311 745T204.5 603.5Q195 500 189 385t120.5-99q126.5 16 226-93.5T707 190q72 107 181.5 208.5t38 230.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M738 605q12 105-84 164.5t-199.5 24Q351 758 221 703.5T88 499q-3-150 82.5-285.5t251-170Q587 9 656 160.5T725.5 406q.5 94 12.5 199Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%239845f7%22 d=%22M738 605q12 105-84 164.5t-199.5 24Q351 758 221 703.5T88 499q-3-150 82.5-285.5t251-170Q587 9 656 160.5T725.5 406q.5 94 12.5 199Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M820 598.5q-123 98.5-221.5 210T364 846q-136-74-117-210t20.5-251.5q1.5-115.5 117-135t227 4Q723 277 833 388.5t-13 210Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%239845f7%22 d=%22M820 598.5q-123 98.5-221.5 210T364 846q-136-74-117-210t20.5-251.5q1.5-115.5 117-135t227 4Q723 277 833 388.5t-13 210Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M750.5 678q-45.5 178-266 204t-243-178q-22.5-204 36-346T494 226.5q158 10.5 230 142T750.5 678Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%239845f7%22 d=%22M750.5 678q-45.5 178-266 204t-243-178q-22.5-204 36-346T494 226.5q158 10.5 230 142T750.5 678Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')",
    "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M728 712.5Q638 925 413 826T160.5 480Q133 233 383 162t342.5 133.5Q818 500 728 712.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%239845f7%22 d=%22M728 712.5Q638 925 413 826T160.5 480Q133 233 383 162t342.5 133.5Q818 500 728 712.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')"
];
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        const data = yield response.json();
        return data.joke;
    });
}
;
function fetchChuckNorrisJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.chucknorris.io/jokes/random', {
            headers: { 'Accept': 'application/json' }
        });
        const data = yield response.json();
        return data.value;
    });
}
;
function fetchRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const random = Math.random();
        if (random < 0.5) {
            return yield fetchJoke();
        }
        else {
            return yield fetchChuckNorrisJoke();
        }
    });
}
;
function displayJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeContainer = document.getElementById('jokeContainer');
        const joke = yield fetchRandomJoke();
        if (jokeContainer) {
            jokeContainer.innerText = joke;
            console.log(joke);
        }
        changeBackground();
    });
}
;
function changeBackground() {
    const jokeFrame = document.getElementById('jokeFrame');
    if (jokeFrame) {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        jokeFrame.style.backgroundImage = backgrounds[randomIndex];
    }
}
(_a = document.getElementById('nextJokeButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', displayJoke);
window.onload = () => {
    displayJoke();
    displayWeather();
};
function saveJoke(joke, score) {
    const JokeReport = {
        joke,
        score,
        date: new Date().toISOString()
    };
    const index = reportAcudits.findIndex(report => report.joke === joke);
    if (index !== -1) {
        reportAcudits[index] = JokeReport;
    }
    else {
        reportAcudits.push(JokeReport);
    }
    console.log(JokeReport);
}
;
(_b = document.getElementById('score1')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    var _a;
    const joke = ((_a = document.getElementById('jokeContainer')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    saveJoke(joke, 1);
});
(_c = document.getElementById('score2')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    const joke = ((_a = document.getElementById('jokeContainer')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    saveJoke(joke, 2);
});
(_d = document.getElementById('score3')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    var _a;
    const joke = ((_a = document.getElementById('jokeContainer')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    saveJoke(joke, 3);
});
function fetchWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Barcelona?unitGroup=metric&key=TT78V593MDZKGXUUNJEGXJATD&contentType=json", {
            headers: { 'Accept': 'application/json' }
        });
        return yield response.json();
    });
}
function displayWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherContainer = document.getElementById('weatherContainer');
        const weatherData = yield fetchWeather();
        const weatherInfo = `Current Temperature: ${weatherData.currentConditions.temp}°C, Conditions: ${weatherData.currentConditions.conditions}`;
        if (weatherContainer) {
            weatherContainer.innerText = weatherInfo;
            console.log(weatherInfo);
        }
    });
}
