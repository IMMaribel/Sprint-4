'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
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
(_a = document.getElementById('nextJokeButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', displayJoke);
window.onload = displayJoke;
