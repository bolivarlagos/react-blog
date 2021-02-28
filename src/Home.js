import React, {useContext} from 'react'
import BlogContext from './BlogContext'
import Archives from './Archives'
import MiniBlog from './MiniBlog'


const Home = () => {
    const {blogs} = useContext(BlogContext)    
  
    return (
        <div className="row">
            <div className="col-md-8">
                <article className="blog-post">                    
                    {blogs.map(blog => {                        
                        return <MiniBlog blog={blog} key={blog.id}/>
                    })}
                </article>
            </div>
            <Archives />            
        </div>
                      
    )
}

export default Home
