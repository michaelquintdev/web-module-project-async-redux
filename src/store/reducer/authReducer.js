import {LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS, GETTING_USER_SUCCESS, GETTING_USER_FAILED, FETCH_USER_ANIME_START, FETCH_USER_ANIME_SUCCESS, FETCH_USER_ANIME_ERROR, POST_ANIME_SUCCESS, POST_ANIME_ERROR} from '../actions/userActions'

export const initialState = {
    user: {
        user_id: 0,
        username: '',
        animes: [],
        friends: [],
    },
    userAnimes: [],
    loading: false,
    message: '',
    userFetched: false,
    isLoggedIn: false,
    isRegistered: false,
    errors: '',
    postErrors: '',
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
            return initialState

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
        case GETTING_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errors: '',
                userFetched: true,
            }
        case GETTING_USER_FAILED:
            return {
                ...state,
                userFetched: false,
                errors: action.payload
            }
        case FETCH_USER_ANIME_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_ANIME_SUCCESS:
            return {
                ...state,
                userAnimes: action.payload,
                errors: '',
                loading: false,
            }
        case FETCH_USER_ANIME_ERROR:
            return {
                ...state, 
                loading: false,
                errors: action.payload,
            }
        case POST_ANIME_SUCCESS:
            return {
                ...state,
                postErrors: '',
                user: {
                    ...state.user,
                    animes: [...state.user.animes, action.payload]
                },
            }
        case POST_ANIME_ERROR:
            return {
                ...state,
                postErrors: action.action,
            }
        default:
            return state;
    }
}