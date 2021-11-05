import {connect} from 'react-redux';
import {useState} from 'react';
import {updateAnime, editing} from '../store/actions/userActions'

const initialState = {
    user_id: 0,
    anime_id: 0,
    completed: 0,
    rating: 0,
}

function ListEntry({userAnimes, idx, user, isEditing, editing, updateAnime}) {
    const [formValues, setFormValues] = useState(initialState)

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    const update = (event) => {
        event.preventDefault()
        const newAnime = {
            user_id: user.user_id,
            anime_id: user.animes[idx].anime_id,
            completed: parseInt(formValues.completed),
            rating: parseInt(formValues.rating),
            idx: idx,
        }
        updateAnime(user.animes[idx].list_id, newAnime);
        console.log(newAnime)
    }
    const edit = () => {
        editing();
    }

    return(
                <div>
                    {userAnimes.length === 0 
                    ? <h2>loading...</h2> 
                    : <div>
                        <h2>{userAnimes[idx].data.title_english}</h2>
                        {isEditing 
                        ? <form> 
                            <label>Completed:</label>
                            <select name='completed' onChange={onChange} value={formValues.completed}>
                                <option value='1'>Yes</option>
                                <option value='0'>No</option>
                            </select>
                            <label>Rating:</label>
                            <input name='rating' onChange={onChange} value={formValues.rating}/>
                            <button onClick={update}>Update</button>
                        </form>
                        : <div>
                            <h4>Completed: {user.animes[idx].completed === 1 ? <p>Yes</p> : <p>No</p>}</h4>
                            <h4>Rating: {user.animes[idx].rating}</h4>
                            <button onClick = {edit}>Edit</button>
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
        user: state.authReducer.user,
        error: state.authReducer.errors,
        isEditing: state.authReducer.isEditing,
    }
}

export default connect(mapStateToProps, {updateAnime, editing})(ListEntry)
