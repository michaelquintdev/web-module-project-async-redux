import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchAnime } from '../store/actions/dataAction'
import { addAnimeToList } from '../store/actions/profileActions'
import {connect} from 'react-redux';

function Anime(props) {
    const { id } = useParams();

    useEffect(() => {
        props.fetchAnime(id);
    }, [])

    if(props.loading){
        return <h2>Loading Anime....</h2>
    }

    return (
        <div>
            <h2>{props.animeData.title_english}</h2>
            <img src = {props.animeData.image_url} alt = 'Animes cover art'/>
            {props.isLoggedIn && <button onClick={props.addAnimeToList(id)}>Add to List</button>}
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
