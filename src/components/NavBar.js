import React from 'react'
import {connect} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {logOut} from '../actions/userActions'

function NavBar({isLoggedIn, logOut}) {
    const {push} = useHistory()

    const handleLogout = (e) => {
        localStorage.removeItem('token')
        logOut()
        push('/')
    }

    return (
        <div>
            <Link to = '/'>AniMenu</Link>
            <nav>
                { !isLoggedIn && <Link to='/login'>Login</Link>}
                { isLoggedIn ? <Link onClick = {handleLogout}>Log Out</Link> : <Link to = '/signup'>Sign Up</Link>}
                { isLoggedIn && <Link to="/dashboard">Profile</Link>}
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.userReducer.isLoggedIn,
    }
  }

export default connect(mapStateToProps, {logOut})(NavBar);
