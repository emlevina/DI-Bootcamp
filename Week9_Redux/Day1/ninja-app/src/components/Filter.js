import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFilterAction, activeFilterAction, completedFilterAction } from '../actions';

const Filter = () => {
    const dispatch = useDispatch()

    return (
        <div> Show:
            <button onClick={()=> dispatch(resetFilterAction())}>All</button>
            <button onClick={()=> dispatch(completedFilterAction())}>Completed</button>
            <button onClick={()=> dispatch(activeFilterAction())}>Active</button>
        </div>
    );
};

export default Filter;