import { AGE_DOWN, AGE_UP } from "../actions/actionTypes"

const initState = {
    age: 20
}

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case AGE_DOWN:
            return { age: state.age - 1 }
        case AGE_UP:
            return { age: state.age + 1 }
        default:
            return { ...state }
    }
}

export default reducer