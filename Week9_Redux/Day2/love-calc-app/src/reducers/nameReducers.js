import { SET_FNAME, SET_SNAME } from "../actions";

export const fname = (state = '', action = {}) => {
    switch (action.type) {
        case SET_FNAME:
            return action.payload
        default:
            return state;
    }
}

export const sname = (state = '', action = {}) => {
    switch (action.type) {
        case SET_SNAME:
            return action.payload
        default:
            return state;
    }
}