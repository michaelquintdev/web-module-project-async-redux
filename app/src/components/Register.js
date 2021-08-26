import React, {useState} from 'react'

function Register() {
    const initialRegister = {username: '', password: ''}
    const [input, setInput] = useState(initialRegister)

    const submitHandler = (event) => {
        event.preventDefault()
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
    }
    return (
        <div>
            <h2>Welcome to AniMerch! Sign Up Below</h2>
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
        </div>
    )
}

export default Register
