import React from 'react'
import BlogContext from './BlogContext'
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Archives from './Archives'
import firebase from './Firebase'
import uuid from 'react-uuid'

const Create = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    const { allMonths, fetchData} = useContext(BlogContext)   

    const convertMonth = (number) => {      
        return allMonths[number]
    }   

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = uuid()
        try {
            firebase.firestore()
            .collection('blogs')
            .doc(`${newId}`)
            .set(
                { 
                    title, 
                    author, 
                    content, 
                    date: convertMonth(new Date().getMonth()), 
                    id: newId
                })
            .then(() => {
                fetchData()
                history.push('/')
            }).catch((err) => {
                console.log('there was an error', err)
                history.push('/')
            })          
        } catch (error) {
            console.log(error)
            history.push('/')            
        }
    }

    return (        
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        Create a New Blog
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title-input">
                                    Title
                                </label>
                                <input 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    name="title-input" 
                                    value={title} 
                                    className="form-control" 
                                    placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author-input">
                                    Author
                                </label>
                                <input 
                                    name="author-input"  
                                    value={author} 
                                    onChange={(e) => setAuthor(e.target.value)} 
                                    className="form-control"  
                                    placeholder="Author"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content-input">
                                    Content
                                </label>
                                <textarea 
                                    className="form-control" 
                                    placeholder="Content" 
                                    name="content-input"  
                                    value={content} 
                                    onChange={(e) => setContent(e.target.value)} 
                                    cols="30"
                                    rows="10"/>
                            </div>                                          
                            <button 
                                onClick={(e) => handleSubmit(e)} 
                                type="submit" 
                                className="btn btn-primary">
                                    Submit                               
                            </button>                            
                        </form>                        
                    </div>
                </div>                
            </div>
            <Archives />
        </div>        
    )
}             

export default Create
