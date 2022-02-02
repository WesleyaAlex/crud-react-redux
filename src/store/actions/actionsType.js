export const getUsers = (users) => ({
    type: 'GET_USERS',
    payload: users
})

export const userDeleted = () => ({
    type: 'DELETE_USERS',
})

export const userAdded = () => ({
    type: 'ADD_USERS',
})

export const userUpdated = () => ({
    type: 'UPDATE_USERS',
})

export const getUser = (user) => ({
    type: 'GET_SINGLE_USERS',
    payload: user
})