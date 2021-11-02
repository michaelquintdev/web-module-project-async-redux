import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchAnime } from '../store/actions/dataAction'
import { addAnimeToList } from '../store/actions/profileActions'
import {connect} from 'react-redux';

const initialState = {
    anime_id: 0,
    completed: 0,
    rating: 0,
}

function Anime(props) {
    const {formValues, setFormValues} = useState(initialState)
    const { id } = useParams();

    useEffect(() => {
        props.fetchAnime(id);
    }, [])

    if(props.loading){
        return <h2>Loading Anime....</h2>
    }

    return (
        <div>
            <div>
                <h2>{props.animeData.title_english}</h2>
                <img src = {props.animeData.image_url} alt = 'Animes cover art'/>
            </div>
            

            {props.isLoggedIn && 
            <form> 
                <label>Completed:</label>
                <select>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                </select>
                <label>Rating:</label>
                <input/>
                <button onClick={props.addAnimeToList(id)}>Add to List</button>
            </form>}

            <p>{props.animeData.synopsis}</p>
            <h3>{props.animeData.title} Trailer</h3>
            <iframe width="900" height="600" src = {props.animeData.trailer_url}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        animeData: state.dataReducer.animeData,
        isLoggedIn: state.authReducer.isLoggedIn,
        error: state.dataReducer.error,
        loading: state.dataReducer.loading,
    }
}

export default connect(mapStateToProps, {fetchAnime, addAnimeToList})(Anime);
