import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogin, getUserData} from '../store/actions/userActions'
import { useHistory } from 'react-router-dom'
import { MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

function Login(props) {
    const initialLogin = {username: '', password: ''}
    const [input, setInput] = useState(initialLogin)
    const {push} = useHistory()
    
    useEffect(() => {
        if(props.isLoggedIn){
            props.getUserData(props.id)
        }
    },[props.isLoggedIn])

    useEffect(() => {
        if(props.userFetched){
            push('/dashboard')
        }
    }, [props.userFetched])
    
    const submitHandler = (event) => {
        event.preventDefault()
        props.handleLogin(input)
        setInput(initialLogin)
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
    }
    return (
        <div>
        <br/>
        <div className='d-flex justify-content-center align-self-center'>
            <MDBCard className='d-flex justify-content-center align-self-center'
            alignment='center' style={{width: '50rem', height: '50vh'}}>
                    <h2>Login Below</h2>
                    <form alignment='center' style={{maxWidth: '100%'}}>
                        <MDBInput 
                            label='Username'
                            id='form1'
                            type='text'
                            name='username'
                            onChange={changeHandler}
                            value={input.username}
                        />
                        <br/>
                        <MDBInput 
                            label='Password'
                            id='form1'
                            type='text'
                            name='password'
                            onChange={changeHandler}
                            value={input.password}
                        />
                        <br/>
                        <MDBBtn onClick={submitHandler}>Submit</MDBBtn>
                    </form>
                    <br/>
                    <p>Don't have an account? <Link to = '/register'>Sign Up Here</Link></p>
                    <div className = 'form-errors'>
                        {props.errors}
                    </div>
            </MDBCard>
            </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.authReducer.isLoggedIn,
        userFetched: state.authReducer.userFetched,
        errors: state.authReducer.errors,
        id: state.authReducer.user.user_id
    }
}

export default connect(mapStateToProps, {handleLogin, getUserData})(Login)