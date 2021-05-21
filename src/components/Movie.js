import React from 'react'

function Movie({movie}) {
    return (
        <div className="movie-imozi">
            <div className="image-box">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
        </div>
    )
}

export default Movie
