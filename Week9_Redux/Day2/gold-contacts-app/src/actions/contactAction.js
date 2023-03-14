import { CREATE_NEW_CONTACT, REMOVE_CONTACT } from './actionType'

export const createContact = (data) => ({
    type: CREATE_NEW_CONTACT,
    payload: data
})

export const deleteContact = (index) => ({
    type: REMOVE_CONTACT,
    payload: index
})