import React, {useState} from 'react'
import {reach} from 'yup'
import schema from '../validation/formSchema'
import axios from 'axios'

function Register() {
    const initialRegister = {username: '', password: ''}
    const [input, setInput] = useState(initialRegister)
    const [formErrors, setFormErrors] = useState(initialRegister)

    const postNewAccount = async (newAccount) =>{
        try {
             const response = await axios.post('https://animenu.herokuapp.com/api/auth/register', newAccount)
                console.log(response)
        }catch(err){
            console.log(err)
        }    
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newAccount = {
            username: input.username.trim(),
            password: input.password.trim(),
        }
        postNewAccount(newAccount)
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
        </div>
    )
}

export default Register
