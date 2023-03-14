import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions'

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const incrementIfOdd = () => {
        if (counter % 2 === 0) {
            dispatch(increment())
        }
    }

    const incrementAsync = () => {
        setTimeout(() => dispatch(increment()), 1000)
    }

    return (
        <div>
            {counter}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={incrementIfOdd}>Increment if Odd</button>
            <button onClick={incrementAsync}>Increment async</button>
        </div>
    );
};

export default Counter;