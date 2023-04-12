"use strict";

const loadingElement = document.querySelector('.loading');
loadingElement.style.display = 'flex';

fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        loadingElement.style.display = 'none';
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
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            cardElement.appendChild(titleElement);
            cardElement.appendChild(directorElement);
            cardElement.appendChild(yearElement);
            cardElement.appendChild(ratingElement);
            jsonDataElement.appendChild(cardElement);
            cardElement.appendChild(deleteButton);

            deleteButton.addEventListener("click", () => {

                deleteButton.addEventListener('click', () => {
                    fetch(`http://localhost:3000/movies/${movie.id}`, {
                        method: 'DELETE',
                    })
                        .then(response => {
                            if (response.ok) {
                                cardElement.remove();
                            } else {
                                console.error('error')
                            }
                        })
                });
            })
        });
    });
//
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
okBtn.addEventListener("click", function () {
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
                    // successfully added response
                    console.log('Movie added successfully');
                    hidePopUp();
                } else {
                    // failed to add response
                    console.error('Failed to add movie');
                }
            })
            .catch(error => {
                // display an error message
                console.error('Failed to add movie:', error);
            });
    } else {
        // message to fill in all fields
        alert("Please fill in all the fields.");
    }
});
// Add click event listener to Cancel button
cancelBtn.addEventListener("click", function () {
    hidePopUp();
    // Hide the pop-up screen
});
// Add click event listener to Add Movie button
addMovieBtn.addEventListener("click", function () {
    showPopUp(); // Show the pop-up screen when Add Movie button is clicked
});







