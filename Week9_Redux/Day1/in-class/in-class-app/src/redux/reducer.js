const initState = {
    prop_one: "text one from redux store"
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'PROP_ONE':
            return { ...state, prop_one: action.payload }
        default:
            return { ...state }
    }
}