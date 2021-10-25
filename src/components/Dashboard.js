import React, {useEffect} from 'react'
import { connect } from 'react-redux'

function Dashboard(props) {
    useEffect(() => {
        console.log(props.id)
    })
    return (
        <div>
            <h1>i SHOULD be able to get to this, WHILE LOGGED IN</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        id: state.authReducer.user.user_id
    }
}

export default connect(mapStateToProps, {})(Dashboard)
