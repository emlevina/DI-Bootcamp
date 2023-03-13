import { SET_COLOR } from "../actions"
const initState = '#cc00cc'

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case SET_COLOR:
            if (action.payload.length === 6) {
                return `#${action.payload}`
            } else { return state }
        default:
            return state;
    }
}

export default reducer