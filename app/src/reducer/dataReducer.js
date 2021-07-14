import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED} from '../actions/dataAction'

const initialState = {
    loading: false,
    data: [],
    error: '',
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
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