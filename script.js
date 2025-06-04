document.getElementById('searchButton').addEventListener('click', searchMovies); 

let api_key = 'fdefb33696423729d684dd9123d04304'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImage = 'https://image.tmdb.org/t/p/w500'


let resultContainer = document.getElementById('results');

function searchMovies() {
    resultContainer.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {

    resultContainer.innerHTML = '';

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda</p>';
        return;
    }

    movies.forEach(movie => {

        let movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        let movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;

        let realeseDate = document.createElement('p');
        realeseDate.textContent = `Fecha de lanzamiento: ${movie.release_date}`;

        let movieOverview = document.createElement('p');
        movieOverview.textContent = movie.overview;

        let posterPath = urlImage + movie.poster_path; 
        let moviePoster = document.createElement('img');
        moviePoster.src = posterPath;        

        movieElement.appendChild(moviePoster);
        movieElement.appendChild(movieTitle);
        movieElement.appendChild(realeseDate);
        movieElement.appendChild(movieOverview);

        resultContainer.appendChild(movieElement);

    })
}