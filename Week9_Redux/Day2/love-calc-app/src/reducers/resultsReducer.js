import { SET_RESULTS } from "../actions"

const initState = {
    percentage: '',
    result: ''
}

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case SET_RESULTS:
            return {...action.payload}
        default:
            return {...state};
    }   
}

export default reducer