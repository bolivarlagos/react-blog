import React, {useContext} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import BlogContext from './BlogContext'
import Archives from './Archives'
import firebase from './Firebase'

const SingleBlog = () => {
    const {title} = useParams()
    const {blogs, fetchData} = useContext(BlogContext)
    const filter = blogs.filter(blog => blog.title === title)
    const history = useHistory() 

    const handleDelete = () => {    
        const id = blogs.filter(blog => blog.title === title)[0].id 
        try {
            firebase.firestore()
            .collection('blogs')
            .doc(`${id}`)
            .delete()
            .then(() => {
                fetchData()
                history.push('/')
                
            }).catch(err => {
                console.log('An error has occured', err)
                history.push('/')
            })            
        } catch (error) {
            console.log('big time error',error)
            history.push('/')            
        }     
    }  
    return (
        <div className="row">
            <div className="col-md-8">
                <div>  
                    {filter.map(single => {                        
                        const {title, author, content, id} = single                

                        return (
                            <div key={id}>
                                <h3>{title}</h3>
                                <p>Writen By {author}</p>
                                <p>{content}</p>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete()}>
                                    Delete {title}
                                </button>
                            </div>                    
                        )
                    })}           
                </div>
            </div>  
            <Archives />          
        </div>        
    )
}

export default SingleBlog
