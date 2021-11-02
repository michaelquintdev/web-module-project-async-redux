import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {reach} from 'yup'
import schema from '../validation/formSchema'
import { handleRegister } from '../store/actions/userActions'
import { useHistory } from 'react-router-dom'

function Register(props) {
    const initialRegister = {username: '', password: ''}
    const [input, setInput] = useState(initialRegister)
    const [formErrors, setFormErrors] = useState(initialRegister)
    const { push } = useHistory();
    
    useEffect(() => {
        if(props.isRegistered){
            push('/login')
        }
    },[props.isRegistered])

    const submitHandler = async (event) => {
        event.preventDefault()
        const newAccount = {
            username: input.username.trim(),
            password: input.password.trim(),
        }
        props.handleRegister(newAccount)
    }

    const validate = (name, value) => {
        reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: '' }))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        validate(name, value)
        setInput({...input, [name]: value})
    }
    return (
        <div>
            <h2>Welcome to AniMerch! Sign Up Below</h2>
            <form>
                <div className = 'form-errors'>{formErrors.username}</div>
                <input 
                    type='username'
                    name='username'
                    onChange={changeHandler}
                    value={input.username}
                />
                <div className = 'form-errors'>{formErrors.password}</div>
                <input 
                    type='password'
                    name='password'
                    onChange={changeHandler}
                    value={input.password}
                />
                <button onClick={submitHandler}>Submit</button>
            </form>
            <div className = 'form-errors'>
                {props.errors}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        errors: state.authReducer.errors,
        isRegistered: state.authReducer.isRegistered
    }
}

export default connect(mapStateToProps, {handleRegister})(Register)
