import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {updateAnime, editing, deleteAnime, fetchUserAnime} from '../store/actions/userActions'
import { MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBCardTitle, MDBBtn, MDBIcon, MDBSpinner} from 'mdb-react-ui-kit';

function ListEntry({userAnimes, idx, user, isEditing, editing, updateAnime, deleteAnime, fetchUserAnime, loading}) {
    const initialState = {
        user_id: 0,
        anime_id: 0,
        completed: 0,
        rating: user.animes[idx].rating,
    }
    const [formValues, setFormValues] = useState(initialState)


    useEffect(() => {
        fetchUserAnime(user.animes[idx].anime_id)
    }, [])

    // Form fun
    const onChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
    }

    // Onclicks for buttons
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
    }

    const edit = () => {
        editing(!isEditing);
    }
    const del = () => {
        deleteAnime(user.animes[idx].list_id, user.animes[idx].anime_id)
    }

    return(
        <div className='p-3 d-flex justify-content-center'>
            {userAnimes.length !== user.animes.length ? 
                <div className='text-center'>
                    <MDBSpinner role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>
                </div> 
                : 
                <MDBCard className='border' style={{ maxWidth: '80%' }} alignment='center'>
                <MDBRow className='g0'>
                    <MDBCol md='2'>
                        <MDBCardImage src={userAnimes[idx].image_url} alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='10'>
                    <MDBCardBody>
                        <MDBCardTitle>
                            {userAnimes[idx].title}
                        </MDBCardTitle>
                        <MDBCardText>
                            {userAnimes[idx].synopsis}
                        </MDBCardText>
                        {isEditing 
                            ? <form> 
                                <label>Completed:</label>
                                <select name='completed' onChange={onChange} value={formValues.completed}>
                                    <option value='1'>Yes</option>
                                    <option value='0'>No</option>
                                </select>
                                <label>Rating:</label>
                                <input 
                                    placeholder={user.animes[idx].rating}
                                    name='rating' 
                                    onChange={onChange} 
                                    value={formValues.rating}
                                />

                                <MDBBtn className='mx-3' onClick={update}>
                                    Update
                                </MDBBtn>
                                <MDBIcon 
                                    fas icon="undo" 
                                    onClick={edit} 
                                    style={{cursor: 'pointer'}}
                                />
                            </form>
                            : <div className='d-inline-flex'>
                                <h4 className='mx-2'>Completed: {user.animes[idx].completed === 1 ? <>Yes</> : <>No</>}</h4>
                                <h4 className='mx-2'>Rating: {user.animes[idx].rating}</h4>
                                <MDBIcon 
                                    className='m-1'
                                    far icon="edit" 
                                    onClick = {edit} 
                                    size='lg'
                                    color='primary'
                                    style={{cursor: 'pointer'}}
                                />
                                <MDBIcon 
                                    className='m-1'
                                    far icon="trash-alt" 
                                    onClick = {del} 
                                    size='lg'
                                    style={{cursor: 'pointer'}}
                                />
                            </div>
                            }
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userAnimes: state.authReducer.userAnimes,
        user: state.authReducer.user,
        loading: state.authReducer.loading,
        isEditing: state.authReducer.isEditing,
    }
}

export default connect(mapStateToProps, {fetchUserAnime, updateAnime, editing, deleteAnime})(ListEntry)
