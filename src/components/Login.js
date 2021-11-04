import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogin, getUserData} from '../store/actions/userActions'
import { useHistory } from 'react-router-dom'

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
            <h2>Login Below</h2>
            <form>
                <input 
                    type='username'
                    name='username'
                    onChange={changeHandler}
                    value={input.username}
                />
                <input 
                    type='password'
                    name='password'
                    onChange={changeHandler}
                    value={input.password}
                />
                <button onClick={submitHandler}>Submit</button>
            </form>
            <p>Don't have an account? <Link to = '/register'>Sign Up Here</Link></p>
            <div className = 'form-errors'>
                {props.errors}
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