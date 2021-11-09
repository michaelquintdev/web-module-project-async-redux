import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchUserAnimes, fetchUserFriends} from '../store/actions/userActions'
import ListEntry from './ListEntry'
import {MDBSpinner} from 'mdb-react-ui-kit';

function Dashboard(props) {
    useEffect(() => {
        props.fetchUserAnimes(props.user.animes)
        // props.fetchUserFriends(props.user.user_id)
    }, [])
    
    if(props.loading){
        return (<div className='text-center'>
            <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
         </div>)
    }

    if(props.errors.length !== 0){
        return <h1>Houston we have a problem.</h1>
    }

    return (
        <div className='m-3 text-center'>
            <h1>{props.user.username}'s List</h1>
            
            {props.user.animes.length === props.userAnimes.length 
            ? props.user.animes.map((user, idx) => {
                return <ListEntry key={user.anime_id} idx={idx}/>
            }) 
            : <div className='text-center'>
                <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.authReducer.user.user_id,
        user: state.authReducer.user,
        userAnimes: state.authReducer.userAnimes,
        loading: state.authReducer.loading,
        errors: state.authReducer.errors,
    }
}

export default connect(mapStateToProps, {fetchUserAnimes, fetchUserFriends})(Dashboard)
