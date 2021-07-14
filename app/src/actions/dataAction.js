import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })
    
    axios.get('https://api.jikan.moe/v3/top/anime/1/favorite')
    .then((res) => {
      dispatch({type: FETCH_DATA_START, payload: res.data.top})
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_FAILED, payload: err})
    })
}