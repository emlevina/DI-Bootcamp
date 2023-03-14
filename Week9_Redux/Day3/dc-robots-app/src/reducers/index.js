import { SEARCH, LOADING, GET_ROBOTS_FAILED, GET_ROBOTS_SUCCESS } from "../actions/actionTypes"

const initState = {
    robots: [],
    search: '',
    error: '',
    isLoading: false
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, search: action.payload }
        case GET_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isLoading: false }
        case GET_ROBOTS_FAILED:
            return { ...state, error: action.payload, isLoading: false }
        case LOADING:
            return { ...state, isLoading: true }
        default:
            return { ...state };
    }
}