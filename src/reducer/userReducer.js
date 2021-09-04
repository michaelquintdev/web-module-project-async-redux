import {LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_SUCCESS} from '../actions/userActions'

export const initialState = {
    user: {
        id: 0,
        username: '',
        animes: [],
        friends: [],
    },
    message: '',
    errors: '',
    isLoggedIn: false,
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
                isLoggedIn: true,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                errors: action.payload,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        default:
            return state;
    }
}