// "use strict";
// // const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// // const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
//
// const TMDB_API_KEY = 'a42c70baf0b11fd7f572f4eea74a8740';
// const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie';
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
//
// const loadingElement = document.querySelector('.loading');
// loadingElement.style.display = 'flex';
//
// const popUpScreen = document.getElementById("popUpScreen");
// const titleInput = document.getElementById("titleInput");
// const genreInput = document.getElementById("genreInput");
// const directorInput = document.getElementById("directorInput");
// const yearInput = document.getElementById("yearInput");
// const ratingInput = document.getElementById("ratingInput");
// const okBtn = document.getElementById("okBtn");
// const cancelBtn = document.getElementById("cancelBtn");
// let addMovieBtn = document.getElementById('addMovieBtn');
//
// const editPopUpScreen = document.getElementById("editPopUpScreen");
// const titleInput1 = document.getElementById("titleInput1");
// const genreInput1 = document.getElementById("genreInput1");
// const directorInput1 = document.getElementById("directorInput1");
// const yearInput1 = document.getElementById("yearInput1");
// const ratingInput1 = document.getElementById("ratingInput1");
// const okBtn1 = document.getElementById("okBtn1");
// const cancelBtn1 = document.getElementById("cancelBtn1");
//
// // Show the pop-up screen
// function showPopUp() {
//     popUpScreen.style.display = "flex";
//
// }
// function showPopUp1() {
//     editPopUpScreen.style.display = "flex";
// }
//
// // Hide the pop-up screen
// function hidePopUp() {
//     popUpScreen.style.display = "none";
//
// }
// function hidePopup1() {
//     editPopUpScreen.style.display = "none";
// }
//
// // Add click event listener to OK button
// okBtn.addEventListener("click", function () {
//     const title = titleInput.value;
//     const genre = genreInput.value;
//     const director = directorInput.value;
//     const year = yearInput.value;
//     const rating = ratingInput.value;
//     if (title && genre && director && year && rating) {
//
//         // Create a JSON object with the movie details
//         const movie = {
//             title: title,
//             genre: genre,
//             director: director,
//             year: year,
//             rating: rating
//         };
//
//         // Perform action with the movie details, e.g., send them to the server using fetch
//         fetch("http://localhost:3000/movies", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(movie)
//         })
//             .then(response => {
//                 if (response.ok) {
//                     // successfully added response
//                     console.log('Movie added successfully');
//                     hidePopUp();
//                     location.reload();
//                 } else {
//                     // failed to add response
//                     console.error('Failed to add movie');
//                 }
//             })
//             .catch(error => {
//                 // display an error message
//                 console.error('Failed to add movie:', error);
//             });
//     } else {
//         // message to fill in all fields
//         alert("Please fill in all the fields.");
//     }
// });
// // Add click event listener to Cancel button
// cancelBtn.addEventListener("click", function () {
//     hidePopUp();
//     // Hide the pop-up screen
// });
// // Add click event listener to Add Movie button
// addMovieBtn.addEventListener("click", function () {
//     showPopUp(); // Show the pop-up screen when Add Movie button is clicked
// });
//
// // fetch('http://localhost:3000/movies')
// //     .then(response => response.json())
// //     .then(data => {
// //         loadingElement.style.display = 'none';
// //         const jsonDataElement = document.getElementById('json-data');
// //
// //         data.forEach(movie => {
// //             const cardElement = document.createElement('div');
// //
// //             cardElement.classList.add('card');
// //             const imgElement = document.createElement('img');
// //             const options = {
// //                 method: 'GET',
// //                 headers: {
// //                     'X-RapidAPI-Key': 'd36d8ce292msh4aeb9b4cfbb47a3p144310jsndadf5d06296b',
// //                     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// //                 }
// //             };
// //             fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movie.title}`, options)
// //                 .then(response => response.json())
// //                 .then(data => {
// //                     console.log(data);
// //                     imgElement.src = data.results[0].image.url;
// //                 })
// //             imgElement.classList.add('img');
// //             const titleElement = document.createElement('h2');
// //             titleElement.textContent = movie.title;
// //             const directorElement = document.createElement('p');
// //             directorElement.textContent = 'Director: ' + movie.director;
// //             const yearElement = document.createElement('p');
// //             yearElement.textContent = 'Year: ' + movie.year;
// //             const ratingElement = document.createElement('p');
// //             ratingElement.textContent = 'Rating: ' + movie.rating;
// //             const deleteButton = document.createElement('button');
// //             deleteButton.textContent = 'Delete';
// //             const editButton = document.createElement('button');
// //             editButton.textContent = 'Edit';
// //             deleteButton.classList.add('delete');
// //             editButton.classList.add('edit');
// //             cardElement.appendChild(imgElement);
// //             cardElement.appendChild(titleElement);
// //             cardElement.appendChild(directorElement);
// //             cardElement.appendChild(yearElement);
// //             cardElement.appendChild(ratingElement);
// //             jsonDataElement.appendChild(cardElement);
// //             cardElement.appendChild(deleteButton);
// //             cardElement.appendChild(editButton);
//
//             fetch('http://localhost:3000/movies')
//                 .then(response => response.json())
//                 .then(data => {
//                     loadingElement.style.display = 'none';
//                     const jsonDataElement = document.getElementById('json-data');
//
//                     data.forEach(movie => {
//                         // Fetch additional data from TMDB based on movie title
//                         fetch(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}`)
//                             .then(response => response.json())
//                             .then(data => {
//                                 const tmdbMovie = data.results[0]; // Assuming first result is the best match
//
//                                 const cardElement = document.createElement('div');
//                                 cardElement.classList.add('card');
//
//                                 const imgElement = document.createElement('img');
//                                 imgElement.src = `${IMG_PATH}${tmdbMovie.poster_path}`;
//                                 imgElement.classList.add('img');
//
//                                 const titleElement = document.createElement('h2');
//                                 titleElement.textContent = tmdbMovie.title;
//
//                                 const ratingElement = document.createElement('p');
//                                 ratingElement.textContent = 'Rating: ' + tmdbMovie.vote_average;
//
//                                 const deleteButton = document.createElement('button');
//                                 deleteButton.textContent = 'Delete';
//                                 // ... Rest of the delete button functionality ...
//
//                                 const editButton = document.createElement('button');
//                                 editButton.textContent = 'Edit';
//                                 // ... Rest of the edit button functionality ...
//
//                                 deleteButton.classList.add('delete');
//                                 editButton.classList.add('edit');
//
//                                 cardElement.appendChild(imgElement);
//                                 cardElement.appendChild(titleElement);
//                                 cardElement.appendChild(ratingElement);
//                                 jsonDataElement.appendChild(cardElement);
//                                 cardElement.appendChild(deleteButton);
//                                 cardElement.appendChild(editButton);
//                             })
//                             .catch(error => console.error(error));
//                     });
//                 })
//                 .catch(error => console.error(error));
//
//                     editButton.addEventListener("click", function () {
//                         // Get the current movie data
//                         const title = movie.title;
//                         const genre = movie.genre;
//                         const director = movie.director;
//                         const year = movie.year;
//                         const rating = movie.rating;
//
//                         // Show the pop-up screen with the current movie data
//                         showPopUp1();
//                         titleInput1.value = title;
//                         genreInput1.value = genre;
//                         directorInput1.value = director;
//                         yearInput1.value = year;
//                         ratingInput1.value = rating;
//
//                         // Add click event listener to OK button
//                         okBtn1.addEventListener("click", function updateMovie() {
//                             const newTitle = titleInput1.value;
//                             const newGenre = genreInput1.value;
//                             const newDirector = directorInput1.value;
//                             const newYear = yearInput1.value;
//                             const newRating = ratingInput1.value;
//                             if (newTitle && newGenre && newDirector && newYear && newRating) {
//
//                                 // Create a JSON object with the updated movie details
//                                 const updatedMovie = {
//                                     title: newTitle,
//                                     genre: newGenre,
//                                     director: newDirector,
//                                     year: newYear,
//                                     rating: newRating
//                                 };
//
//                                 // Perform action with the updated movie details, e.g., send them to the server using fetch
//                                 fetch(`http://localhost:3000/movies/${movie.id}`, {
//                                     method: 'PATCH',
//                                     headers: {
//                                         'Content-Type': 'application/json'
//                                     },
//                                     body: JSON.stringify(updatedMovie)
//                                 })
//                                     .then(response => {
//                                         if (response.ok) {
//                                             // Successfully updated movie
//                                             console.log('Movie updated successfully');
//                                             // Update the UI with the new movie data
//                                             titleElement.textContent = newTitle;
//                                             directorElement.textContent = 'Director: ' + newDirector;
//                                             yearElement.textContent = 'Year: ' + newYear;
//                                             ratingElement.textContent = 'Rating: ' + newRating;
//                                             hidePopup1();
//                                             location.reload()
//                                         } else {
//                                             // Failed to update movie
//                                             console.error('Failed to update movie');
//                                         }
//                                     })
//                                     .catch(error => {
//                                         // Display an error message
//                                         console.error('Failed to update movie:', error);
//                                     });
//                             } else {
//                                 // Message to fill in all fields
//                                 alert("Please fill in all the fields.");
//                             }
//                         });
//                     });
//
// // Add click event listener to Cancel button
//                     cancelBtn1.addEventListener("click", function () {
//                         hidePopup1();
//                         // Hide the pop-up screen
//                     });
//                 });
//         });
//
//         let text = document.getElementById('text');
//         let bird1 = document.getElementById('bird1');
//         let bird2 = document.getElementById('bird2');
//         let rocks = document.getElementById('rocks');
//         let forest = document.getElementById('forest');
//         let header = document.getElementById('header');
//
//         window.addEventListener('scroll', function () {
//             let value = window.scrollY;
//
//             text.style.top = 50 + value * -0.5 + '%';
//             bird1.style.top = value * -1.5 + 'px';
//             bird1.style.left = value * 2 + 'px';
//             bird2.style.top = value * -1.5 + 'px';
//             bird2.style.left = value * -5 + 'px';
//             addMovieBtn.style.marginTop = value * 1.5 + 'px';
//             rocks.style.top = value * -0.12 + 'px';
//             forest.style.top = value * 0.25 + 'px';
//             header.style.top = value * 0.5 + 'px';
//         })
//
"use strict";

const TMDB_API_KEY = 'a42c70baf0b11fd7f572f4eea74a8740';
const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const loadingElement = document.querySelector('.loading');
loadingElement.style.display = 'flex';

const popUpScreen = document.getElementById("popUpScreen");
const titleInput = document.getElementById("titleInput");
const genreInput = document.getElementById("genreInput");
const directorInput = document.getElementById("directorInput");
const yearInput = document.getElementById("yearInput");
const ratingInput = document.getElementById("ratingInput");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");
let addMovieBtn = document.getElementById('addMovieBtn');

const editPopUpScreen = document.getElementById("editPopUpScreen");
const titleInput1 = document.getElementById("titleInput1");
const genreInput1 = document.getElementById("genreInput1");
const directorInput1 = document.getElementById("directorInput1");
const yearInput1 = document.getElementById("yearInput1");
const ratingInput1 = document.getElementById("ratingInput1");
const okBtn1 = document.getElementById("okBtn1");
const cancelBtn1 = document.getElementById("cancelBtn1");

// Show the pop-up screen
function showPopUp() {
    popUpScreen.style.display = "flex";
}

function showPopUp1() {
    editPopUpScreen.style.display = "flex";
}

// Hide the pop-up screen
function hidePopUp() {
    popUpScreen.style.display = "none";
}

function hidePopup1() {
    editPopUpScreen.style.display = "none";
}

// Add click event listener to OK button
okBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const title = titleInput.value;
    const genre = genreInput.value;
    const director = directorInput.value;
    const year = yearInput.value;
    const rating = ratingInput.value;

    if (title && genre && director && year && rating) {
        fetch(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const tmdbMovie = data.results[0];

                    const movie = {
                        title: tmdbMovie.title,
                        genre: genre,
                        director: director,
                        year: year,
                        rating: rating
                    };

                    fetch("http://localhost:3000/movies", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(movie)
                    })
                        .then(response => {
                            if (response.ok) {
                                console.log('Movie added successfully');
                                hidePopUp();
                                location.reload();
                            } else {
                                console.error('Failed to add movie');
                            }
                        })
                        .catch(error => {
                            console.error('Failed to add movie:', error);
                        });
                } else {
                    console.error('No movie found with the provided title');
                }
            })
            .catch(error => {
                console.error('Failed to fetch movie data:', error);
            });
    } else {
        alert("Please fill in all the fields.");
    }
});

// Add click event listener to Cancel button
cancelBtn.addEventListener("click", function () {
    hidePopUp();
    // Hide the pop-up screen
});

// Add click event listener to Add Movie button
addMovieBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission
    showPopUp(); // Show the pop-up screen when Add Movie button is clicked
});


function getClassByRate(vote_average) {
    if(vote_average >= 8) {
        return 'green'
    } else if(vote_average >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
// Fetch movies data and render them
fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        loadingElement.style.display = 'none';
        const jsonDataElement = document.getElementById('json-data');

        data.forEach(movie => {
            // Fetch additional data from TMDB based on movie title
            fetch(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}`)
                .then(response => response.json())
                .then(data => {
                    const tmdbMovie = data.results[0]; // Assuming first result is the best match

                    const cardElement = document.createElement('div');
                    cardElement.classList.add('card');
                    cardElement.style.width = '300px'; // Adjust the width as needed
                    cardElement.style.height = 'auto'; // Adjust the width as needed


                    const imgElement = document.createElement('img');
                    imgElement.src = `${IMG_PATH}${tmdbMovie.poster_path}`;
                    imgElement.classList.add('img');

                    const titleElement = document.createElement('h2');
                    titleElement.textContent = tmdbMovie.title;

                    const ratingElement = document.createElement('p');
                    const voteAverage = tmdbMovie.vote_average;
                    ratingElement.textContent = `Rating: ${voteAverage !== 0 ? voteAverage : 'N/A'}`;
                    ratingElement.classList.add(getClassByRate(voteAverage));
                    cardElement.appendChild(ratingElement);


                    const directorElement = document.createElement('p');
                    directorElement.textContent = `Director: ${movie.director}`;

                    const genreElement = document.createElement('p');
                    genreElement.textContent = `Genre: ${movie.genre}`;

                    const yearElement = document.createElement('p');
                    yearElement.textContent = `Year: ${movie.year}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.classList.add('delete');
                    deleteButton.addEventListener('click', () => {
                        // Call the deleteMovie function with the movie ID
                        deleteMovie(movie.id);
                    });

                    const editButton = document.createElement('button');
                    editButton.textContent = 'Edit';
                    editButton.classList.add('edit');
                    editButton.addEventListener('click', () => {
                        // Call the editMovie function with the movie ID
                        editMovie(movie);
                    });

                    cardElement.appendChild(imgElement);
                    cardElement.appendChild(titleElement);
                    cardElement.appendChild(ratingElement);
                    cardElement.appendChild(directorElement);
                    cardElement.appendChild(genreElement);
                    cardElement.appendChild(yearElement);
                    cardElement.appendChild(deleteButton);
                    cardElement.appendChild(editButton);
                    jsonDataElement.appendChild(cardElement);
                })
                .catch(error => console.error(error));
        });
    })
    .catch(error => console.error(error));

function deleteMovie(movieId) {
    // Send a DELETE request to the server to delete the movie
    fetch(`http://localhost:3000/movies/${movieId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                // Successfully deleted movie
                console.log('Movie deleted successfully');
                location.reload();
            } else {
                // Failed to delete movie
                console.error('Failed to delete movie');
            }
        })
        .catch(error => {
            // Display an error message
            console.error('Failed to delete movie:', error);
        });
}

function editMovie(movie) {
    // Get the current movie data

    // Show the edit pop-up screen with the current movie data
    showPopUp1();
    titleInput1.value = movie.title;
    genreInput1.value = movie.genre;
    directorInput1.value = movie.director;
    yearInput1.value = movie.year;
    ratingInput1.value = movie.rating;

    // Add click event listener to OK button
    okBtn1.addEventListener("click", function updateMovie() {
        const newTitle = titleInput1.value;
        const newGenre = genreInput1.value;
        const newDirector = directorInput1.value;
        const newYear = yearInput1.value;
        const newRating = ratingInput1.value;

        if (newTitle && newGenre && newDirector && newYear && newRating) {
            // Create a JSON object with the updated movie details
            const updatedMovie = {
                title: newTitle,
                genre: newGenre,
                director: newDirector,
                year: newYear,
                rating: newRating
            };

            // Perform action with the updated movie details, e.g., send them to the server using fetch
            fetch(`http://localhost:3000/movies/${movie.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedMovie)
            })
                .then(response => {
                    if (response.ok) {
                        // Successfully updated movie
                        console.log('Movie updated successfully');
                        hidePopup1();
                        location.reload();
                    } else {
                        // Failed to update movie
                        console.error('Failed to update movie');
                    }
                })
                .catch(error => {
                    // Display an error message
                    console.error('Failed to update movie:', error);
                });
        } else {
            // Message to fill in all fields
            alert("Please fill in all the fields.");
        }
    });
}

// Add click event listener to Cancel button
cancelBtn1.addEventListener("click", function () {
    hidePopup1();
    // Hide the pop-up screen
});

let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    addMovieBtn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
});
