"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //wait for load content ,and then runs the script
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
        let newFilm = addImput.value;
        const favorite = checkBox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log("Улюблений фільм");
            }
            movieDB.movies.push(newFilm); //add film in arrey
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

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
        sortArr(movieDB.movies);
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${
                i + 1
            } ${film}
                                        <div class="delete"></div>
                                    </li>`;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent); // recurs
            });
        });
    }

    createMovieList(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChenges();
});
