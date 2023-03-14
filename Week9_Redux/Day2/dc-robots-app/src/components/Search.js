import React from 'react';
import { useDispatch } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch({type: "SEARCH", payload: e.target.value})
    }

    return (
        <div className='search'>
            <input type="text" onChange={handleChange} />
        </div>
    );
};

export default Search;