"use strict";

// function createMovie() {
//     let title = prompt("What is the title of your movie?");
//     let rating = prompt("Who is the rating of this movie?")
//     return {title, rating};
// }


// fetch("http://localhost:3000/movies")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
const loadingElement = document.querySelector('.loading');
loadingElement.style.display = 'flex';

fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        loadingElement.style.display = 'none';
        const jsonDataElement = document.getElementById('json-data');
        // jsonDataElement.innerHTML = `<div class="loading"><img src="img/loading.gif" alt="loading"></div>`;
        // console.log('loading complete');
        data.forEach(movie => {
            const cardElement = document.createElement('div');
            // cardElement.setAttribute(
            //     'style',
            //     'width: 300px; height: 200px; margin: 1rem; box-shadow: 0 4px 5px rgba(0,0,0,0.2); overflow: hidden; '
            // )
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
// const addButton = document.getElementById('addMovie');
// addButton.addEventListener('click', addMovie);
// function addMovie() {
//     fetch("http://localhost:3000/movies", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(createMovie())
//     })
//         .then(resp => resp.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// }
// function createMovie() {
//     // This function should return a JavaScript object with the movie data to be added.
//     // For example:
//     return {
//         title: prompt("What is the title of your movie?"),
//         director: prompt("Who directed your movie?"),
//         year: prompt("What year did your movie come out?"),
//         rating: prompt("What do you rate your movie?")
//     };
// }
const popUpScreen = document.getElementById("popUpScreen");
const titleInput = document.getElementById("titleInput");
const genreInput = document.getElementById("genreInput");
const directorInput = document.getElementById("directorInput");
const yearInput = document.getElementById("yearInput");
const ratingInput = document.getElementById("ratingInput");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");
const addMovieBtn = document.getElementById("addMovieBtn");
// Show the pop-up screen
function showPopUp() {
    popUpScreen.style.display = "flex";
}
// Hide the pop-up screen
function hidePopUp() {
    popUpScreen.style.display = "none";
}
// Add click event listener to OK button
okBtn.addEventListener("click", function() {
    const title = titleInput.value;
    const genre = genreInput.value;
    const director = directorInput.value;
    const year = yearInput.value;
    const rating = ratingInput.value;
    if (title && genre && director && year && rating) {
        // Create a JSON object with the movie details
        const movie = {
            title: title,
            genre: genre,
            director: director,
            year: year,
            rating: rating
        };
        // Perform action with the movie details, e.g., send them to the server using fetch
        fetch("http://localhost:3000/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
            .then(response => {
                if (response.ok) {
                    // Handle successful response, e.g., display a success message
                    console.log('Movie added successfully');
                    hidePopUp();
                } else {
                    // Handle unsuccessful response, e.g., display an error message
                    console.error('Failed to add movie');
                }
            })
            .catch(error => {
                // Handle fetch error, e.g., display an error message
                console.error('Failed to add movie:', error);
            });
    } else {
        // Handle case when any of the input fields are empty
        alert("Please fill in all the fields.");
    }
});
// Add click event listener to Cancel button
cancelBtn.addEventListener("click", function() {
    hidePopUp();
     // Hide the pop-up screen
});
// Add click event listener to Add Movie button
addMovieBtn.addEventListener("click", function() {
    showPopUp(); // Show the pop-up screen when Add Movie button is clicked
});







