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
        <div className='d-flex flex-row ps-3 my-3'>
            <h4><Link to = '/'>AniMenu</Link></h4>
            <nav><h5 className = 'pt-1'>
                { !isLoggedIn && <Link className='mx-4' to='/login'>Login</Link>}
                { isLoggedIn ? <Link className='mx-4' to= '/' onClick = {handleLogout}>Log Out</Link> : <Link to = '/register'>Register</Link>}
                { isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
                </h5>
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
