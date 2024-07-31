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
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        const data = yield response.json();
        return data.joke;
    });
}
function displayJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeContainer = document.getElementById('jokeContainer');
        const joke = yield fetchJoke();
        if (jokeContainer) {
            jokeContainer.innerText = joke;
            console.log(joke);
        }
    });
}
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
(_a = document.getElementById('score1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    const joke = ((_a = document.getElementById('jokeContainer')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    saveJoke(joke, 1);
});
(_b = document.getElementById('score2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    var _a;
    const joke = ((_a = document.getElementById('jokeContainer')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    saveJoke(joke, 2);
});
(_c = document.getElementById('score3')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    const joke = ((_a = document.getElementById('jokeContainer')) === null || _a === void 0 ? void 0 : _a.innerText) || '';
    saveJoke(joke, 3);
});
(_d = document.getElementById('nextJokeButton')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', displayJoke);
window.onload = displayJoke;
