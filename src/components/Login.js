import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Login() {
    const initialLogin = {username: '', password: ''}
    const [input, setInput] = useState(initialLogin)

    const submitHandler = (event) => {
        event.preventDefault()
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
        </div>
    )
}

export default Login
