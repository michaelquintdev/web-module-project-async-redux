import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchUserFriends, resetUserAnimes} from '../store/actions/userActions'
import ListEntry from './ListEntry'
import { Link } from 'react-router-dom';

function Dashboard(props) {
    useEffect(() => {
        props.resetUserAnimes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(props.errors.length !== 0){
        return <h1>Houston we have a problem.</h1>
    }

    return (
        <div className='m-3 text-center'>
            <h1>{props.user.username}'s List</h1>
            
            {props.user.animes.map((user, idx) => {
                return <ListEntry key={user.anime_id} idx={idx}/>
            })}
            {props.user.animes.length === 0 && <h3>Welcome to AniMenu, since you're new you can add animes to your list from the <Link to = '/'>homepage</Link></h3>}
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

export default connect(mapStateToProps, { fetchUserFriends, resetUserAnimes})(Dashboard)
