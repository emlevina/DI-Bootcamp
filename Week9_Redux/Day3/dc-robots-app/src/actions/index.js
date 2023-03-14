import { SEARCH, LOADING, GET_ROBOTS_FAILED, GET_ROBOTS_SUCCESS } from "./actionTypes"

export const getRobots = () => dispatch => {
    dispatch({ type: LOADING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: GET_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: GET_ROBOTS_FAILED, payload: err }))
}

export const searchTerm = (val) => ({ type: SEARCH, payload: val})