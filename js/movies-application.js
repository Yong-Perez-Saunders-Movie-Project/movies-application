"use strict";

function createMovie() {
    let title = prompt("What is the title of your movie?");
    let rating = prompt("Who is the rating of this movie?")
    return {title, rating};
}


// fetch("http://localhost:3000/movies")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        const jsonDataElement = document.getElementById('json-data');
        data.forEach(movie => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            const titleElement = document.createElement('h2');
            titleElement.textContent = movie.title;
            const directorElement = document.createElement('p');
            directorElement.textContent = 'Director: ' + movie.director;
            const yearElement = document.createElement('p');
            yearElement.textContent = 'Year: ' + movie.year;
            const ratingElement = document.createElement('p');
            ratingElement.textContent = 'Rating: ' + movie.rating;
            cardElement.appendChild(titleElement);
            cardElement.appendChild(directorElement);
            cardElement.appendChild(yearElement);
            cardElement.appendChild(ratingElement);
            jsonDataElement.appendChild(cardElement);
        });
    });

