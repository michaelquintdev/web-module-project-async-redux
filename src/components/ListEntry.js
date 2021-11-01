import {connect} from 'react-redux';
import {useEffect} from 'react'

function ListEntry(props) {
    return(
                <div>
                    <h2>{props.profileAnimes.length === 0 ? <h3>heyoooooooo</h3> : props.profileAnimes[props.idx].data.title_english}</h2>
                    <h4>Completed: {props.user.completed}</h4>
                    <h4>Rating: {props.user.rating}</h4>
                    {/* <p>{props.anime.synopsis}</p>
                    {<img src={props.anime.image_url} alt="Movie's Poster"/>}  */}
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileAnimes: state.profileReducer.profileAnimes,
        error: state.profileReducer.errors,
        loading: state.profileReducer.loading,
    }
}

export default connect(mapStateToProps, {})(ListEntry)
