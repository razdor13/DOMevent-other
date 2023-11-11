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
    // отримання елементів зі сторінки
    const adv = document.querySelectorAll(".promo__adv img");
    const poster = document.querySelector(".promo__bg");
    const genre = poster.querySelector(".promo__genre");
    const movieList = document.querySelector(".promo__interactive-list");
    const addForm = document.querySelector("form.add");
    const addImput = document.querySelector(".adding__input");
    const checkBox = addForm.querySelector('[type="checkbox"]');

    console.log(checkBox);

    addForm.addEventListener("submit", (event) => {
        event.preventDefault(); // дефолт поведінка форми (без перезапуску після субміту)
        let newFilm = addImput.value; //
        const favorite = checkBox.checked; //

        if (newFilm) {
            // пустий рядок то умова не виконається
            if (newFilm.length > 21) {
                //якщо довжина рядка більше 21 то скорочує заміня букви ...
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                // якщо черекер тру то виводить
                console.log("Улюблений фільм");
            }
            movieDB.movies.push(newFilm); //add film in arrey
            sortArr(movieDB.movies); //сортування нашого оновленного масиву
            createMovieList(movieDB.movies, movieList); //
        }

        event.target.reset(); //сброс форми післля введеня
    });

    const deleteAdv = (arr) => {
        //видалення всієї реклами з блоку
        arr.forEach((item) => {
            item.remove();
        });
    };
    const makeChenges = () => {
        // зміна назви жанру  та заднього фону
        genre.textContent = "drama";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        //функція сортування
        arr.sort();
    };

    function createMovieList(films, parent) {
        // створення списку фільмів
        parent.innerHTML = ""; // кожен раз коли функція починає працювати вона на місці списку фільмів в версці створює пустий тег
        sortArr(movieDB.movies); // сортує знов массив і
        films.forEach((film, i) => {
            //бере з массиву фільм додає його в тег з індексом (номером)
            parent.innerHTML += `<li class="promo__interactive-item">${
                i + 1
            } ${film}
                                        <div class="delete"></div>
                                    </li>`;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            // навішує обробник подій на кнопку видалення
            btn.addEventListener("click", () => {
                // також нам важливий індекс так як по ньому ми будемо взаемодіяти з масивом
                btn.parentElement.remove(); //видаляє батьківський елемент (тоб-то фільм)
                movieDB.movies.splice(i, 1); //видаляє елемент масиву за допомогою сплайс (перший аргумент номер в масиві , другий скільки потрібно видалити)
                createMovieList(films, parent); // recurs
            });
        });
    }

    createMovieList(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChenges();
});
