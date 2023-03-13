import {combineReducers} from 'redux';
import results from './resultsReducer';
import { sname, fname } from './nameReducers';
import color from './colorReducer'

export const reducer = combineReducers({
    results,
    sname,
    fname,
    color
})