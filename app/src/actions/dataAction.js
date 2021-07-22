import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_FAVORITE_DATA_SUCCESS = 'FETCH_FAVORITE_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const FETCH_UPCOMING_DATA_SUCCESS = 'FETCH_UPCOMING_DATA_SUCCESS';
export const FETCH_AIRING_DATA_SUCCESS = 'FETCH_AIRING_DATA_SUCCESS';

export const fetchFavoriteData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })
    
    axios.get('https://api.jikan.moe/v3/top/anime/1/favorite')
    .then((res) => {
      console.log('FAVORITE: ', res.data)
      dispatch({type: FETCH_FAVORITE_DATA_SUCCESS, payload: res.data.top})
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_FAILED, payload: err})
    })
}

export const fetchUpcomingData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })
    
    axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')
    .then((res) => {
      console.log('UPCOMING: ', res.data)
      dispatch({type: FETCH_UPCOMING_DATA_SUCCESS, payload: res.data.top})
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_FAILED, payload: err})
    })
  }

  export const fetchAiringData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA_START })
    
    axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
    .then((res) => {
      console.log('AIRING: ', res.data)
      dispatch({type: FETCH_AIRING_DATA_SUCCESS, payload: res.data.top})
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_FAILED, payload: err})
    })
  }