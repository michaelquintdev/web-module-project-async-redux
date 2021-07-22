import {FETCH_DATA_START, FETCH_FAVORITE_DATA_SUCCESS, FETCH_UPCOMING_DATA_SUCCESS, FETCH_DATA_FAILED, FETCH_AIRING_DATA_SUCCESS} from '../actions/dataAction'

const initialState = {
    loading: false,
    favoriteData: [],
    upcomingData: [],
    airingData: [],
    error: '',
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_FAVORITE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                favoriteData: action.payload,
            }
        case FETCH_UPCOMING_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                upcomingData: action.payload,
            }
        case FETCH_AIRING_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                airingData: action.payload,
            }
        case FETCH_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}