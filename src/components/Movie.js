import React from 'react'

function Movie({movie}) {
    return (
        <div className="movie-imozi">
                <div className="poster-img">
                    <img  src={"https://image.tmdb.org/t/p/w500/"+movie.backdrop_path} alt={movie.title} />
                </div>
                <div className="movie-info-brief">
                    <h5>{movie.title}</h5>
                    <ul>
                        <li>{movie.release_date}</li>
                        <li>{movie.vote_average}</li>
                    </ul>
                </div>
        </div>
    )
}

export default Movie
