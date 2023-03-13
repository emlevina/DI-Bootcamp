export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const RESET_FILTER = 'RESET_FILTER';
export const COMPL_FILTER = 'COMPL_FILTER';
export const ACTIVE_FILTER = 'ACTIVE_FILTER';


export const addTaskAction = (value) => {
    return {
        type: ADD_TASK,
        payload: value
    }
}

export const deleteTaskAction = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const toggleTaskAction = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

export const resetFilterAction = () => {
    return {
        type: RESET_FILTER
    }
}

export const activeFilterAction = () => {
    return {
        type: ACTIVE_FILTER
    }
}

export const completedFilterAction = () => {
    return {
        type: COMPL_FILTER
    }
}