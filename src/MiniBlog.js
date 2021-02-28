import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const MiniBlog = ({blog}) => {
    const {title, author, id, content} = blog
    const [clicked, setClicked] = useState(true)   
    return (
        <div>           
            <div key={id}>
                <Link 
                    to={`/single/${title}`}>
                        <h2 
                            className="blog-post-title">
                            {title}
                        </h2>
                </Link>
                <p 
                    className="blog-post-meta">
                        Writen by 
                        <Link 
                            to={`/profile/${author}`}>
                                {author}
                        </Link>
                </p>
                <p>{clicked ? content.substring(0, 200) : content}</p>
                <button 
                    className="btn btn-link" 
                    onClick={() => setClicked(!clicked)}>
                        {clicked ? 'show more' : 'show-less'}
                </button>
            </div>                                             
                    
        </div>
    )
}

export default MiniBlog
