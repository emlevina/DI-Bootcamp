import { AGE_UP, PENDING, AGE_DOWN } from './actionTypes'


export const ageUpAsync = () => (dispatch) => {
    dispatch(loading())
    setTimeout(() => dispatch(onAgeUp()), 1000)
}

export const ageDownAsync = () => (dispatch) => {
    dispatch(loading())
    setTimeout(() => dispatch(onAgeDown()), 1000)
}

export const loading = () => ({
    type: PENDING
})

export const onAgeUp = () => ({
    type: AGE_UP,
})

export const onAgeDown = () => ({
    type: AGE_DOWN,
})