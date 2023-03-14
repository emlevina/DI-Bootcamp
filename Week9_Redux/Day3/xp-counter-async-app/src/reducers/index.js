import counter from "./counterReducer"
import { combineReducers } from '@reduxjs/toolkit'


const reducer = combineReducers({
    counter
})

export default reducer