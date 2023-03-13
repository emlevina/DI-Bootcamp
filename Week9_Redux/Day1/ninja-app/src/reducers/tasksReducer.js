import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actions"

const initState = [
    { id: 0, text: 'Draft task', isDone: false }
]

let idCounter = 0

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD_TASK:
            idCounter++
            return [...state, { id: idCounter, text: action.payload, isDone: false }]
        case DELETE_TASK:
            return [...state.filter(task => task.id !== action.payload)]
        case TOGGLE_TASK:
            return [...state.map(task => {
                if (task.id === action.payload) task.isDone = !task.isDone
                return task
            })]
        default:
            return [...state]
    }
}

export default reducer