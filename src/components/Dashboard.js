import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {getProfileData, fetchProfileAnimes} from '../store/actions/profileActions'
import ListEntry from './ListEntry'


function Dashboard(props) {
    useEffect(() => {
        props.getProfileData(props.id)
    },[])

    useEffect(() => {
        props.fetchProfileAnimes(props.user.animes)
    }, [props.user.animes])

    if(props.loadingUserData){
        return <h1>Loading User Data...</h1>
    }
    
    if(props.errors.length !== 0){
        return <h1>Houston we have a problem.</h1>
    }

    return (
        <div>
            <h1>{props.user.username}</h1>
            <h2>Friends: {props.user.friends.map(friend => {
                return friend + ', '
            })}</h2>
            {props.user.animes.map((user, idx) => {
                return <ListEntry key={user.anime_id} user={user} idx={idx}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.authReducer.user.user_id,
        user: state.profileReducer.user,
        profileAnimes: state.profileReducer.profileAnimes,
        loadingUserData: state.profileReducer.loadingUserData,
        loading: state.profileReducer.loading,
        errors: state.profileReducer.errors,
    }
}

export default connect(mapStateToProps, {getProfileData, fetchProfileAnimes})(Dashboard)
