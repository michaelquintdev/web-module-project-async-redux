import React from 'react'
import {connect} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {logOut} from '../store/actions/userActions'

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
                { isLoggedIn ? <Link onClick = {handleLogout}>Log Out</Link> : <Link to = '/register'>Register</Link>}
                { isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.authReducer.isLoggedIn,
    }
  }

export default connect(mapStateToProps, {logOut})(NavBar);
