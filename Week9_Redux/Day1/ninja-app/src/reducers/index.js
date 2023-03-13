import tasks from "./tasksReducer";
import filter from "./filterReducer";
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    tasks,
    filter
})