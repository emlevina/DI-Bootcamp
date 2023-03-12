import { combineReducers } from 'redux'
import articles from './articleReducer'
import searchTerm from './searchReducer'

export default combineReducers({
    articles,
    searchTerm
})

