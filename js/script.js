'use strict';
let numberOfFilms = +prompt('Скільки фільмів ви вже подивились?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    provat: false
};

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


if (personalMovieDB.count < 10) {
    console.log('Ви подивились мало фільмів');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Ви класичний глядач)');
} else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман)');
} else {
    console.log('Сталася помилка(');
}


