import { AGE_DOWN, PENDING, AGE_UP } from "../actions/actionTypes"

const initState = {
    age: 20,
    isLoading: false
}
const rootReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case AGE_DOWN:
            return { age: state.age - 1, isLoading: false}
        case AGE_UP:
            return { age: state.age + 1, isLoading: false}
        case PENDING:
            return { ...state, isLoading: true}
        default:
            return state
    }
}


export default rootReducer