import React from 'react'
import {Link} from 'react-router-dom'
import Archives from './Archives'

const Error = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <h1>Not Found</h1>
                <Link to="/">Back to the Homepage</Link>
            </div>  
            <Archives />          
        </div>
    )
}

export default Error
