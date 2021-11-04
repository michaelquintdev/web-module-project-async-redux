import {GETTING_PROFILE_FAILED, GETTING_PROFILE_SUCCESS, FETCH_PROFILE_ANIME_START, FETCH_PROFILE_ANIME_SUCCESS} from '../actions/profileActions'

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
        case GETTING_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                errors: '',
                loadingUserData: false,
            }
        case GETTING_PROFILE_FAILED:
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
        default:
            return state;
    }
}