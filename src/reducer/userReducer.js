import {LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/userActions'

export const initialState = {
    user: {
        id: 0,
        username: '',
        animes: [],
        friends: [],
    },
    message: '',
    errors: '',
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.user_id,
                username: action.payload.username,
                message: `Welcome ${action.payload.username}!`,
                errors: '',
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errors: action.payload.message,
            }
        default:
            return state;
    }
}