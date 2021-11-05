import {LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS, GETTING_USER_SUCCESS, GETTING_USER_FAILED, FETCH_USER_ANIME_START, FETCH_USER_ANIME_SUCCESS, FETCH_USER_ANIME_ERROR, POST_ANIME_SUCCESS, POST_ANIME_ERROR, GETTING_USER_FRIENDS_START, GETTING_USER_FRIENDS_SUCCESS, GETTING_USER_FRIENDS_FAILED, PUT_ANIME_SUCCESS, PUT_ANIME_ERROR, EDITING_CHANGE} from '../actions/userActions'

export const initialState = {
    user: {
        user_id: 0,
        username: '',
        animes: [],
        friends: [],
    },
    userAnimes: [],
    loading: false,
    loadingFriends: false,
    message: '',
    userFetched: false,
    isLoggedIn: false,
    isRegistered: false,
    isEditing: false,
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

        case EDITING_CHANGE:
            return {
                ...state,
                isEditing: action.payload,
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
        case GETTING_USER_FRIENDS_START:
            return {
                ...state,
                loadingFriends: true,
            }
        case GETTING_USER_FRIENDS_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    friends: [...state.user.friends, action.payload]
                },
                loadingFriends: false,
                errors: '',
            }
        case GETTING_USER_FRIENDS_FAILED:
            return {
                ...state,
                error: action.payload,
                loadingFriends: false,
            }
        case PUT_ANIME_SUCCESS: {
            const newArray = [...state.user.animes];
            newArray[action.payload.idx] = {...action.payload.rest, list_id: action.payload.list_id}
            return {
                ...state,
                isEditing: false,
                user: {
                    ...state.user,
                    animes: newArray
                },
            }
        }
        case PUT_ANIME_ERROR:
            return {
                ...state,
                putErrors: action.action,
            }
        default:
            return state;
    }
}