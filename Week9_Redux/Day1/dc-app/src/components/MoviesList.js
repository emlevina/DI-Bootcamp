import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { selectMovie } from '../redux/actions';

const MovieItem = ({movie, selectMovie}) => <li>{movie.title} <button onClick={selectMovie}>show details</button></li>

const MoviesList = () => {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const _selectMovie = useCallback((movie)=>{
        dispatch(selectMovie(movie))
    },[dispatch])

    return (
        <div>
            {movies.map((movie, i) => <MovieItem key={i} movie={movie} selectMovie={() => _selectMovie(movie)}/>)}
        </div>
    );
};

export default MoviesList;