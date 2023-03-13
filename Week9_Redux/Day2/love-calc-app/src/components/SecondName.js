import React from 'react';
import { setSecondNameAction } from '../actions';
import { useDispatch } from 'react-redux';

const SecondName = () => {
    const dispatch = useDispatch()
    const setSecondName = (e) => {
        dispatch(setSecondNameAction(e.target.value))
    }
    return <input type='text' placeholder='Second Name' onChange={setSecondName}/>;
};

export default SecondName;