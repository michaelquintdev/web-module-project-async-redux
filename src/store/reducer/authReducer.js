import {LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS} from '../actions/userActions'

export const initialState = {
    user: {
        user_id: 0,
        username: '',
        animes: [],
        friends: [],
    },
    message: '',
    errors: '',
    isLoggedIn: false,
    isRegistered: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    user_id: action.payload.id,
                    username: '',
                    animes: [],
                    friends: [],
                },
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
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
            }
        case REGISTER_ERROR:
            return {
                ...state,
                errors: action.payload,
            }
        default:
            return state;
    }
}