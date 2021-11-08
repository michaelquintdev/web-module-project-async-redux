import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'

function FriendsPage(props) {
    const {id} = useParams();

    return (
        <div>
            y'all see the cat on the homepage?
        </div>
    )
}


const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {})(FriendsPage)
