'use strict';
let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let firstQuestion = prompt('Який фільм ви недавно переглядали?'),
            secondQuestion = prompt('Оцініть його');

        if (firstQuestion != null && secondQuestion != null &&
            firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Ви подивились мало фільмів');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач)');
    } else if (personalMovieDB.count > 30) {
        console.log('Ви кіноман)');
    } else {
        console.log('Сталася помилка(');
    }
}

// detectPersonalLevel();

function showMyDB() {
    personalMovieDB.privat ? null : console.log(personalMovieDB);
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let question = prompt(`Ваш улюблений жанр під номером ${i}?`);
        personalMovieDB.genres[i - 1] = question;
    }
}

writeYourGenres();


