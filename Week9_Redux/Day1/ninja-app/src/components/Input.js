import React, { useState } from 'react';
import { addTaskAction } from '../actions';
import { useDispatch } from 'react-redux';

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTaskAction(input))
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='task' onChange={(e)=>setInput(e.target.value)} value={input}/>
        </form>
    );
};

export default Input;