import { combineReducers } from '@reduxjs/toolkit';
import contacts from './contactReducer';

const reducer = combineReducers({
    contacts
})
export default reducer