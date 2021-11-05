import {connect} from 'react-redux';

function ListEntry({userAnimes, idx, error, user, anime, isEditing}) {
    return(
                <div>
                    {userAnimes.length === 0 
                    ? <h2>loading...</h2> 
                    : <div>
                        <h2>{userAnimes[idx].data.title_english}</h2>
                        {isEditing 
                        ? <h2>heyowe'reediitng</h2> 
                        : <div>
                            <h4>Completed: {user.completed === 1 ? <p>Yes</p> : <p>No</p>}</h4>
                            <h4>Rating: {user.rating}</h4>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        }
                        <img src={userAnimes[idx].data.image_url} alt="Movie's Poster"/>
                        <p>{userAnimes[idx].data.synopsis}</p>
                    </div>
                    }
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userAnimes: state.authReducer.userAnimes,
        error: state.authReducer.errors,
        isEditing: state.authReducer.isEditing,
    }
}

export default connect(mapStateToProps, {})(ListEntry)
