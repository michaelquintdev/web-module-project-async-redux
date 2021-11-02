import axios from "axios"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const handleLogin = (user) => (dispatch) => {
    axios.post('https://animenu.herokuapp.com/api/users/login', user)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            dispatch({type: LOGIN_ERROR, payload: err.message})
        })
}
export const logOut = () => {
    return {type: LOG_OUT_SUCCESS, payload: false}
}
export const handleRegister = (user) => (dispatch) => {
    axios.post('https://animenu.herokuapp.com/api/users/register', user)
        .then(res => {
            dispatch({type: REGISTER_SUCCESS, payload: res.data})
            // localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            dispatch({type: REGISTER_ERROR, payload: err.message})
        })
}