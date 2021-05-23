import React from 'react'

function Movie({movie}) {
    return (
        <div className="movie-imozi">
            <a href="">
                <img className="poster-img" src={movie.poster} alt={movie.title} />
            </a>
        </div>
    )
}

export default Movie
