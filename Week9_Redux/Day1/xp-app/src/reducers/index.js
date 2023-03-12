// The store should have an initialState containing the attribute count. By default count should be equal to zero.
// Note: Reducer is the brain of a Redux app. It takes away the state from the individual component and manages the entire state of the app in a single place (note that there could be multiple reducers for complex app). The reducer is a pure function that takes an action(payload). The reason that the reducer must be a pure function is that the reducer is not supposed to change any object outside of the function.
import { INCREASE_COUNT, DECREASE_COUNT } from '../actions'
const initialState = {
    count: 0
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return { ...state, count: state.count + 1 }
        case DECREASE_COUNT:
            return { ...state, count: state.count - 1 }
        default:
            return { ...state }
    }

}