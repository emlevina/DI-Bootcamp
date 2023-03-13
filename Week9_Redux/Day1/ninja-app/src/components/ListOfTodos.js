import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskAction, toggleTaskAction } from '../actions';

const Todo = ({ task }) => {
    const dispatch = useDispatch()
    const deleteTask = () => {
        dispatch(deleteTaskAction(task.id))
    }

    const toggleTask = () => {
        dispatch(toggleTaskAction(task.id))
    }

    const style = task.isDone ? { color: 'gray', textDecoration: 'line-through' } : { }
    return <li style={style}>{task.text} <button onClick={deleteTask}>Delete task</button><button onClick={toggleTask}>Toggle</button></li>
}

const ListOfTodos = () => {
    const tasks = useSelector(state => state.tasks)
    const filter = useSelector(state => state.filter)

    return (
        <ul>
            {tasks.filter(filter).map(task => <Todo key={task.id} task={task} />)}
        </ul>
    );
};

export default ListOfTodos;