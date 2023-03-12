import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../actions';

const SearchBar = () => {
    const input = useSelector(state => state.searchTerm)
    const dispatch = useDispatch()
    const _changeSearchTerm = (e) => {
        dispatch(changeSearchTerm(e.target.value))
    }
    return (
        <input type="text" onChange={_changeSearchTerm} value={input} />
    );
};

export default SearchBar;