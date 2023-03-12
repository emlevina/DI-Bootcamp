import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../actions';

const Counter = () => {
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch()
    const incrementCounter = useCallback(
        () => dispatch(increase()),
        [dispatch]
    )
    const decrementCounter = useCallback(
        () => dispatch(decrease()),
        [dispatch]
    )
    return (
        <div>
            <button onClick={decrementCounter}>-</button>
            <p>{counter}</p>
            <button onClick={incrementCounter}>+</button>
        </div>
    );
};

export default Counter;