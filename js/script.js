fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2025&api_key=a8a78d6abfcb863f985c62ad400260cb')
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        let movieList = '';
        movies.forEach(movie => {
            movieList += `<div><h3>${movie.title}</h3><p>Release Date: ${movie.release_date}</p></div>`;
        });
        document.getElementById('movie-list').innerHTML = movieList;
    });
