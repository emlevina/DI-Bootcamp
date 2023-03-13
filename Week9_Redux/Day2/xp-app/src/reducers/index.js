const defaultState = {
    list: [],
    currentIndex: '',
    idCounter: 0
}

const initState = { ...defaultState, ...JSON.parse(localStorage.getItem('state')) }

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'ADD_TRANS':
            return { ...state, list: [...state.list, { id: state.idCounter, ...action.payload }], idCounter: state.idCounter + 1 }
        case 'DELETE_TRANS':
            return { ...state, list: [...state.list.filter(tr => tr.id !== action.payload)] }
        case 'UPDATE_TRANS':
            return {
                ...state, list: [...state.list.map(tr => {
                    if (tr.id === state.currentIndex) {
                        let updatedTrans = { id: tr.id, ...action.payload }
                        console.log(updatedTrans)
                        console.log(state.list)
                        return updatedTrans
                    }
                    return tr
                })]
            }
        case 'UPDATE_INDEX':
            return { ...state, currentIndex: action.payload }
        default:
            return { ...state };
    }
}