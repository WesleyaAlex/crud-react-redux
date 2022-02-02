const INITIAL_STATE = {
    users: [],
    user: {}
}

const UserReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'GET_SINGLE_USERS':
            return {
                ...state,
                user: action.payload
            }
        case 'DELETE_USERS':
        case 'ADD_USERS':
        case 'UPDATE_USERS':
            return {
                ...state
            }
        default: 
            return state
    }
}

export default UserReducers