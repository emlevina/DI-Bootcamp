import { ACTIVE_FILTER, COMPL_FILTER, RESET_FILTER } from "../actions"

const initState = (item) => {
    return item
}

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case RESET_FILTER:
            return initState
        case COMPL_FILTER:
            return (task) => task.isDone === true
        case ACTIVE_FILTER:
            return (task) => task.isDone === false
        default:
            return state;
    }
}

export default reducer