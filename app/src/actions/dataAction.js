import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_FAVORITE_DATA_SUCCESS = 'FETCH_FAVORITE_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const fetchFavoriteData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })
    
    axios.get('https://api.jikan.moe/v3/top/anime/1/favorite')
    .then((res) => {
      dispatch({type: FETCH_FAVORITE_DATA_SUCCESS, payload: res.data.top})
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_FAILED, payload: err})
    })
}

// export const fetchUpComingData = () => (dispatch) => {
//     dispatch({ type: FETCH_DATA_START })
    
//     axios.get('https://api.jikan.moe/v3/top/anime/1/favorite')
//     .then((res) => {
//       dispatch({type: FETCH_FAVORITE_DATA_SUCCESS, payload: res.data.top})
//     })
//     .catch((err) => {
//       dispatch({type: FETCH_DATA_FAILED, payload: err})
//     })
