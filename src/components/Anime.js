import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchAnime } from '../store/actions/dataAction'
import { addAnimeToList } from '../store/actions/userActions'
import {connect} from 'react-redux';

const initialState = {
    user_id: 0,
    anime_id: 0,
    completed: 0,
    rating: 0,
}

function Anime(props) {
    const [formValues, setFormValues] = useState(initialState)
    const { id } = useParams();

    useEffect(() => {
        props.fetchAnime(id);
    }, [])

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newAnime = {
            user_id: props.user_id,
            anime_id: parseInt(id),
            completed: parseInt(formValues.completed),
            rating: parseInt(formValues.rating),
        }
        props.addAnimeToList(newAnime);
    }

    if(props.loading){
        return <h2>Loading Anime....</h2>
    }
    if(props.error){
        return <h2>Couldn't load anime :(</h2>
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
                <select name='completed' onChange={onChange} value={formValues.completed}>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                </select>
                <label>Rating:</label>
                <input name='rating' onChange={onChange} value={formValues.rating}/>
                <button onClick={onSubmit}>Add to List</button>
            </form>}
            {props.postErrors.length !== 0 ? <h4>{props.postErrors}</h4> : null}
            
            <h3>Synopsis</h3>
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
        user_id: state.authReducer.user.user_id,
        error: state.dataReducer.error,
        loading: state.dataReducer.loading,
        postErrors: state.authReducer.postErrors,
    }
}

export default connect(mapStateToProps, {fetchAnime, addAnimeToList})(Anime);
