import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchUserAnimes, fetchUserFriends} from '../store/actions/userActions'
import ListEntry from './ListEntry'
import { Link } from 'react-router-dom';

function Dashboard(props) {
    useEffect(() => {
        props.fetchUserAnimes(props.user.animes)
        props.fetchUserFriends(props.user.user_id)
    }, [])
    
    if(props.loading){
        return <h1>loading...</h1>
    }

    if(props.errors.length !== 0){
        return <h1>Houston we have a problem.</h1>
    }

    return (
        <div>
            <h1>{props.user.username}</h1>
            <h2>Friends (Work in Progress): {props.user.friends.map((friend, idx) => {
                return <Link key = {friend} to={`/list/${friend.friend_id}`}>{friend.username}</Link>
            })}</h2>
            {props.user.animes.length === props.userAnimes.length ? props.user.animes.map((user, idx) => {
                return <ListEntry key={user.anime_id} idx={idx}/>
            }) : <h2>Loading Anime Data...</h2>}
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
