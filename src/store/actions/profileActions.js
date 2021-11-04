import axios from "axios"

export const GETTING_PROFILE_START = "GETTING_PROFILE_START";
export const GETTING_PROFILE_SUCCESS = "GETTING_PROFILE_SUCCESS";
export const GETTING_PROFILE_FAILED = "GETTING_PROFILE_FAILED";

export const FETCH_PROFILE_ANIME_START = 'FETCH_PROFILE_ANIME_START';
export const FETCH_PROFILE_ANIME_SUCCESS = 'FETCH_PROFILE_ANIME_SUCCESS';
export const FETCH_PROFILE_ANIME_ERROR = 'FETCH_PROFILE_ANIME_ERROR';


export const getProfileData = (id) => (dispatch) => {
    dispatch({type: GETTING_PROFILE_START})
    axios.get(`https://animenu.herokuapp.com/api/users/${id}`)
        .then(res => {
            dispatch({type: GETTING_PROFILE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GETTING_PROFILE_FAILED, payload: err.message})
        })
}

export const fetchProfileAnimes = (animes) => (dispatch) => {
    dispatch({ type: FETCH_PROFILE_ANIME_START })
    const promises = Promise.all(animes.map((anime) => {
        return axios.get(`https://api.jikan.moe/v3/anime/${anime.anime_id}`)
    }))
    promises.then(data => {
        dispatch({type: FETCH_PROFILE_ANIME_SUCCESS, payload: data})
    }).catch(error => {
        dispatch({type:FETCH_PROFILE_ANIME_ERROR, payload: error})
    })
  }
  
