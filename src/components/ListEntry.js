import {connect} from 'react-redux';

function ListEntry({profileAnimes, idx, error, user, anime}) {
    return(
                <div>
                    {profileAnimes.length === 0 
                    ? <h2>loading...</h2> 
                    : <div>
                        <h2>{profileAnimes[idx].data.title_english}</h2>
                        <h4>Completed: {user.completed === 1 ? <p>Yes</p> : <p>No</p>}</h4>
                        <h4>Rating: {user.rating}</h4>
                        <img src={profileAnimes[idx].data.image_url} alt="Movie's Poster"/>
                        <p>{profileAnimes[idx].data.synopsis}</p>
                    </div>
                    }
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileAnimes: state.profileReducer.profileAnimes,
        error: state.profileReducer.errors,
    }
}

export default connect(mapStateToProps, {})(ListEntry)
