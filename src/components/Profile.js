import React, {useEffect} from 'react'
import { connect } from 'react-redux'

function Profile(props) {
    useEffect(() => {
        console.log(props.user)
    })
    return (
        <div>
            <h1>i SHOULD be able to get to this, WHILE LOGGED IN</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {})(Profile)
