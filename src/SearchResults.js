import React, {useContext} from 'react'
import BlogProvider from './BlogContext'
import {Link} from 'react-router-dom'
import Archives from './Archives'

const SearchResults = () => {
    const {filter} = useContext(BlogProvider)
    return (

        <div className="row">
            <div className="col-md-8">
                <div>
                    <h1>Search Results:</h1>
                        {filter.map(item => {
                            const {title, author, id} = item
                            return (
                                <div key={id}>
                                    <Link 
                                        to={`/single/${title}`}>
                                            <h3>
                                                {title}
                                            </h3>
                                    </Link>
                                    <p>{author}</p>
                                </div>
                            )
                        })}
                </div>
            </div>  
            <Archives />          
        </div>      
    )
}

export default SearchResults
