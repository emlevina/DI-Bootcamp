import React from 'react';
import { setFirstNameAction } from '../actions';
import { useDispatch } from 'react-redux';

const FirstName = () => {
    const dispatch = useDispatch()
    const setFirstName = (e) => {
        dispatch(setFirstNameAction(e.target.value))
    }
    return <input type='text' placeholder='First Name' onChange={setFirstName}/>;
};

export default FirstName;