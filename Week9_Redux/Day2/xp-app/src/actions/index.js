export const addTransationAction = (data) => {
    return {
        type: 'ADD_TRANS',
        payload: data
    }
}

export const deleteAction = (id) => {
    return {
        type: 'DELETE_TRANS',
        payload: id
    }
}


export const updateAction = (data) => {
    return {
        type: 'UPDATE_TRANS',
        payload: data
    }
}


export const updateIndexAction = (id) => {
    return {
        type: 'UPDATE_INDEX',
        payload: id
    }
}
