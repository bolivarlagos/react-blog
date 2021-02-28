import React, {useContext, useState} from 'react'
import BlogProvider from './BlogContext'
import firebase from './Firebase'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const {setIsLogged} = useContext(BlogProvider)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            let user = userCredentials.user
            console.log('Sucessfully logged in')
            console.log(user)
        })
        .then(() => {
            setIsLogged(true)
            history.push('/')

        })
        .catch(error => {
            let errorCode = error.code
            let errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
        
    }

    return (
        <main className="form-signin">
            <form>                
                <h1 
                    className="h3 mb-3 fw-normal">
                        Please Sign in
                </h1>
                <label 
                    htmlFor="inputEmail" 
                    className="visually-hidden">
                        Email address
                </label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    required autofocus />
                <label 
                    htmlFor="inputPassword" 
                    className="visually-hidden">
                        Password
                </label>
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>                               
                <button 
                    onClick={(e) => handleLogin(e)}

                    className="w-100 btn btn-lg btn-primary" 
                    type="submit">
                        Sign in
                </button>               
            </form>
        </main>
    )
}

export default Login
