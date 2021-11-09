import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchAnime } from '../store/actions/dataAction'
import { addAnimeToList, resetMessages } from '../store/actions/userActions'
import {connect} from 'react-redux';
import { MDBCard, MDBSpinner, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

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
        props.resetMessages();
        props.fetchAnime(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // Form fun
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

    // loading and errors
    if(props.loading){
        return (<div className='text-center'>
            <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
         </div>)
    }

    if(props.error){
        return <h2 className='text-danger'>Couldn't load anime :(</h2>
    }

    return (
        <>
            <h2 className='text-center pt-3'>{props.animeData.title}</h2>
            {props.animeData.trailer_url !== null && 
                <div className='p-1 d-flex justify-content-center'>
                    <iframe title='Trailer'width="900" height="600" src = {props.animeData.trailer_url}/>
                </div>}
            <div className='p-3 d-flex justify-content-center'>
                <MDBCard className='border' style={{ maxWidth: '80%' }} alignment='center'>
                    <MDBRow className='g0'>
                        <MDBCol md='2'>
                            <MDBCardImage src={props.animeData.image_url} alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='10'>
                        <MDBCardBody>
                            <MDBCardText>
                            {props.animeData.synopsis}
                            </MDBCardText>
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
                                {props.postErrors.length !== 0 ? <h4 className='text-danger'>{props.postErrors}</h4> : null}
                                {props.postSuccessMessage.length !== 0 ? <h4 className='text-success'>{props.postSuccessMessage}</h4> : null}
                        </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>
        </>
        
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
        postSuccessMessage: state.authReducer.postSuccessMessage,
    }
}

export default connect(mapStateToProps, {fetchAnime, addAnimeToList, resetMessages})(Anime);
