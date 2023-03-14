import { CREATE_NEW_CONTACT, REMOVE_CONTACT } from '../actions/actionType'

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case CREATE_NEW_CONTACT:
            return [...state, action.payload]

        case REMOVE_CONTACT:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]

        default:
            return [...state]
    }
}

export default reducer