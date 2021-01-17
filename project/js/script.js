/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.querySelector(".promo__bg").style.cssText="background: url(img/bg.jpg)";
document.querySelector(".promo__adv").style.display="none";
document.querySelector(".promo__genre").textContent="Драма";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Спасти рядового Райна",
        "Forest Gamp",
        "Green LAnter",
        "Justice Leage"

        
    ]
};


movieDB.movies.sort();
let movieItem=document.querySelectorAll(".promo__interactive-item"),
    movieContainer=document.querySelector('.promo__interactive-list');

movieContainer.innerHTML="";
movieDB.movies.forEach((item,i)=>{
    movieContainer.innerHTML+=`<li class="promo__interactive-item">${i+1}) ${item}<div class="delete"></div></li>`;
        
});


