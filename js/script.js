/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };

    const adv = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg");
    const genre = poster.querySelector(".promo__genre");
    const movieList = document.querySelector(".promo__interactive-list");
    const addForm = document.querySelector("form.add");
    const addImput = document.querySelector(".adding__input");
    const checkBox = addForm.querySelector('[type="checkbox"]');

    console.log(checkBox);

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newFilm = addImput.value;
        const favorite = checkBox.checked;
        movieDB.movies.push(newFilm); //add film in arrey
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    };
    const makeChenges = () => {
        genre.textContent = "drama";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${
                i + 1
            } ${film}
                                        <div class="delete"></div>
                                    </li>`;
        });
    }

    createMovieList(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChenges();
    sortArr(movieDB.movies);
});
