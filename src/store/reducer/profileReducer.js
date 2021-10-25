import {} from '../actions/userActions'

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

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}