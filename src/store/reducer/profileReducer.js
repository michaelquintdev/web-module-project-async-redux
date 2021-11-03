import {GETTING_USER_FAILED, GETTING_USER_SUCCESS,FETCH_PROFILE_ANIME_START, FETCH_PROFILE_ANIME_SUCCESS, POST_ANIME_SUCCESS, POST_ANIME_ERROR} from '../actions/profileActions'

export const initialState = {
    user: {
        user_id: 0,
        username: '',
        friends: [],
        animes: [],
    },
    errors: '',
    postErrors: '',
    loading: true,
    loadingUserData: true,
    profileAnimes: [],
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case GETTING_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errors: '',
                loadingUserData: false,
            }
        case GETTING_USER_FAILED:
            return {
                ...state,
                loadingUserData: false,
                errors: action.payload
            }
        case FETCH_PROFILE_ANIME_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PROFILE_ANIME_SUCCESS:
            return {
                ...state,
                profileAnimes: action.payload,
                errors: '',
                loading: false,
            }
        case POST_ANIME_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    animes: [...state.user.animes, action.payload]
                },
            }
        case POST_ANIME_ERROR:
            return {
                user: {
                    ...state,
                    postErrors: action.payload,
                }
            }
        default:
            return state;
    }
}