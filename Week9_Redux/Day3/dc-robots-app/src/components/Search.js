import React from 'react';
import { useDispatch } from 'react-redux';
import { searchTerm } from '../actions';

const Search = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(searchTerm(e.target.value))
    }

    return (
        <div className='search'>
            <input type="text" onChange={handleChange} />
        </div>
    );
};

export default Search;