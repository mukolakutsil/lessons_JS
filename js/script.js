'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {

        this.count = +prompt('Скільки фільмів ви вже подивились?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {

            this.count = +prompt('Скільки фільмів ви вже подивились?', '');

        }
    },
    rememberMyFilms() {
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
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Ви подивились мало фільмів');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Ви класичний глядач)');
        } else if (personalMovieDB.count > 30) {
            console.log('Ви кіноман)');
        } else {
            console.log('Сталася помилка(');
        }
    },
    showMyDB() {
        personalMovieDB.privat ? null : console.log(personalMovieDB);
    },
    writeYourGenres() {
        for (let i = 1; i < 2; i++) {

            // let question = prompt(`Ваш улюблений жанр під номером ${i}?`);
            // if (question == null || question == '') {
            //     alert('Ви ввели некоректні дані');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = question;
            // }

            // Альтернативний спосіб, який використовує метод split
            let question = prompt(`Введіть ваші улюблені жанри через кому`).toLowerCase();
            if (question == null || question == '') {
                alert('Ви ввели некоректні дані');
                i--;
            } else {
                personalMovieDB.genres = question.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i, arr) => {

            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });


    },
    toggleVisibleMyDB() {

        this.privat ? this.privat = false : this.privat = true;

    },

};

personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();




// for (let key in personalMovieDB) {
//     if (typeof (personalMovieDB[key]) === 'object') {
//         for (let i in personalMovieDB[key]) {
//             alert(`Ключ ${i} містить значення - ${personalMovieDB[key][i]}`)
//         }
//     } else {
//         alert(`Ключ ${key} містить значення - ${personalMovieDB[key]}`)
//     }
// }


