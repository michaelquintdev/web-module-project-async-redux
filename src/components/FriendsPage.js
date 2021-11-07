import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'

function FriendsPage(props) {
    const {id} = useParams();

    useEffect(() => {
        
    },[])

    return (
        <div>
            heyo hahahah
        </div>
    )
}


const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {})(FriendsPage)
