import React, {useState} from 'react'
import {connect} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {logOut} from '../store/actions/userActions'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit';

function NavBar({isLoggedIn, logOut}) {
    const {push} = useHistory()

    const [showNav, setShowNav] = useState(false);

    const handleLogout = (e) => {
        localStorage.removeItem('token')
        logOut()
        push('/')
    }

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand><Link to='/'>AniMenu</Link></MDBNavbarBrand>
                    <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                <MDBNavbarNav>
                    <MDBNavbarItem>
                        <MDBNavbarLink>
                            <Link to="/">Home</Link>
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink>
                            { !isLoggedIn && <Link to='/login'>Login</Link>}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink>
                            {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink>
                            { isLoggedIn && <Link to= '/' onClick = {handleLogout}>Log Out</Link> }
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.authReducer.isLoggedIn,
    }
  }

export default connect(mapStateToProps, {logOut})(NavBar);
