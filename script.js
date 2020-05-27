"use strict";

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
// Унарный плюс для того чтобы перевести значение в цифры, как мы знаем ответ от пользователя получаем виде строк
const personalMovieDB = {
        count: numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        privat:false
    };

const   a = prompt('Один из просмотренных фильмов?',''),
        b = prompt('Насколько оцените его?',''),
        c = prompt('Один из просмотренных фильмов?',''),
        d = prompt('Насколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
/* поместили ответы пользователя
   в пустой объект movies
   movies{
       logan: 9;
   }
*/

console.log(personalMovieDB);