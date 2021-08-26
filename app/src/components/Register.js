import React, {useState} from 'react'
import {reach} from 'yup'
import schema from '../validation/formSchema'

function Register() {
    const initialRegister = {username: '', password: ''}
    const [input, setInput] = useState(initialRegister)
    const [formErrors, setFormErrors] = useState(initialRegister)

    const submitHandler = (event) => {
        event.preventDefault()
        setInput(initialRegister)
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
                <div classname = 'form-errors'>{formErrors.username}</div>
                <input 
                    type='username'
                    name='username'
                    onChange={changeHandler}
                    value={input.username}
                />
                <div classname = 'form-errors'>{formErrors.password}</div>
                <input 
                    type='password'
                    name='password'
                    onChange={changeHandler}
                    value={input.password}
                />
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Register
