import { AGE_DOWN_ASYNC, PENDING, AGE_UP_ASYNC } from "../actions/actionTypes"

const initState = {
    age: 20,
    isLoading: false
}
const rootReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case AGE_DOWN_ASYNC:
            return { age: state.age - 1, isLoading: false}
        case AGE_UP_ASYNC:
            return { age: state.age + 1, isLoading: false}
        case PENDING:
            return { ...state, isLoading: true}
        default:
            return state
    }
}


export default rootReducer