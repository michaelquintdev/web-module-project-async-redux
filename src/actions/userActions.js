import axios from "axios"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";

export const handleLogin = (user) => (dispatch) => {
    axios.post('https://animenu.herokuapp.com/api/auth/login', user)
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