import React, { useState, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import BlogProvider from './BlogContext'
import firebase from './Firebase'

const Navbar = () => {
    const [search, setSearch] = useState('')
    const { blogs, setFilter, isLogged, setIsLogged } = useContext(BlogProvider) 
    const history = useHistory()    

    const handleClick = (e) => {
        e.preventDefault()
        const filteredBlogs = blogs.filter(blog => blog.title.includes(search))
        setFilter(filteredBlogs)
        setSearch('')
        history.push('/search')
    }

    const handleLogout = () => {
        firebase.auth()
        .signOut()
        .then(() => {
            console.log('Sucessfully Signed Out')
        })
        .then(() => {
            setIsLogged(false)
            history.push('/')
        })
        .catch(error => {
            console.log('An error has happenned', error)
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link 
                className="navbar-brand" 
                to="/">
                    Navbar
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>             
            <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link 
                            className="nav-link" 
                            to="/">
                                Home 
                                <span className="sr-only">
                                    (current)
                                </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/about">
                                About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/create">
                                Create
                        </Link>
                    </li>
                    {isLogged ?
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" 
                            to="" 
                            id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                                Logout 
                        </Link>
                        <div className="dropdown-menu" 
                            aria-labelledby="navbarDropdown">
                            <p className="dropdown-item">Admin</p>
                            <p className="dropdown-item">admin@admin.com</p>
                            <div className="dropdown-divider"></div>
                            <button 
                                onClick={() => handleLogout()} 
                                className="dropdown-item">
                                    Logout
                            </button>
                        </div>
                    </li>
                    :
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/login">
                                Login                                    
                        </Link>
                    </li>                    
                    }     
                </ul>
                <form className="form-inline my-2 my-lg-0">                        
                    <input 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" />
                    <button 
                        onClick={(e) => handleClick(e)} 
                        className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit">
                            Search
                    </button>
                </form>
            </div>                   
        </nav>        
    )
}

export default Navbar
                    
