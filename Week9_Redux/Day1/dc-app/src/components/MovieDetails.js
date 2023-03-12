import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const selectedMovie = useSelector(state => state.selectedMovie)

    return (
        <div>
            {selectedMovie && <p>{selectedMovie.title} {selectedMovie.releaseDate} {selectedMovie.rating}</p>}
        </div>
    )
};

export default MovieDetails;