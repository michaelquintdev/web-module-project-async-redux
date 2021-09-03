import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchAnime } from '../actions/dataAction'
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
            <h3>{props.animeData.title} Trailer</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        animeData: state.dataReducer.animeData,
        error: state.dataReducer.error,
        loading: state.dataReducer.loading,
    }
}

export default connect(mapStateToProps, {fetchAnime})(Anime);
