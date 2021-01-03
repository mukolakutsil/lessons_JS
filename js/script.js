let numberOfFilms = +prompt('Скільки фільмів ви вже подивились?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    provat: false
};


let firstQuestion = prompt('Який фільм ви недавно переглядали?'),
    secondQuestion = prompt('Оцініть його'),
    thirdQuestion = prompt('Який фільм ви недавно переглядали?'),
    fourthQuestion = prompt('Оцініть його');

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;

