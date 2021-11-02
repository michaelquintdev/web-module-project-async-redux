import axios from "axios"

export const GETTING_USER_START = "GETTING_USER_START";
export const GETTING_USER_SUCCESS = "GETTING_USER_SUCCESS";
export const GETTING_USER_FAILED = "GETTING_USER_FAILED";

export const FETCH_PROFILE_ANIME_START = 'FETCH_PROFILE_ANIME_START';
export const FETCH_PROFILE_ANIME_SUCCESS = 'FETCH_PROFILE_ANIME_SUCCESS';
export const FETCH_PROFILE_ANIME_ERROR = 'FETCH_PROFILE_ANIME_ERROR';

export const POST_ANIME_START = 'POST_ANIME_START';
export const POST_ANIME_SUCCESS = 'POST_ANIME_SUCCESS';
export const POST_ANIME_ERROR = 'POST_ANIME_ERROR';

export const getProfileData = (id) => (dispatch) => {
    dispatch({type: GETTING_USER_START})
    axios.get(`https://animenu.herokuapp.com/api/users/${id}`)
        .then(res => {
            dispatch({type: GETTING_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: GETTING_USER_FAILED, payload: err.message})
        })
}

export const addAnimeToList = (anime_id) => (dispatch) => {
    dispatch({type: POST_ANIME_START})
    axios.post('https://animenu.herokuapp.com/api/lists', anime_id)
        .then(res => {
            dispatch({type: POST_ANIME_SUCCESS, payload: res})
        }).catch(error => {
            dispatch({type: POST_ANIME_ERROR, action: error.message})
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
  
