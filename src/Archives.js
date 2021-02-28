import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import BlogContext from './BlogContext'


const Archives = () => {
    const {blogs, allMonths} = useContext(BlogContext)
    const months = blogs.map((blog) => blog.date)
    
    return (
        <div className="col-md-4">
            <div className="p-4">
                <h4 className="font-italic">Archives</h4>
                <ol className="list-unstyled mb-0"> 
                    {allMonths.map(month => {
                        return (
                            months.includes(month) ?
                            <>
                                <li key={month}>{month}</li>
                                {blogs.filter(blog => blog.date === month)
                                .map(each => {
                                    return (
                                        <Link 
                                            to={`/single/${each.title}`}
                                            key={each.id}>
                                            <li>
                                                {each.title}
                                            </li>
                                        </Link>
                                    )
                                })}                               
                            </>
                            : null
                        )                       
                    })}                                    
                </ol>       
            </div>
            <div className="p-4">
                <h4 className="font-italic">Social</h4>
                <ol className="list-unstyled">
                    <li><a href="http://www.github.com">GitHub</a></li>
                    <li><a href="http://www.twitter.com">Twitter</a></li>
                    <li><a href="http://www.facebook.com">Facebook</a></li>
                </ol>
            </div>
        </div>
    )
}
export default Archives

                    
