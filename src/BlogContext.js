import React,{useState, useEffect} from 'react'
import firebase from './Firebase'

const BlogProvider = React.createContext()

export const ContextProvider = ({children}) => {
    const [blogs, setBlogs] = useState([])
    const [filter, setFilter] = useState([])
    const [isLogged, setIsLogged] = useState(false)
    const allMonths = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ]
    
    const fetchData = async () => {
        await firebase
        .firestore()
        .collection('blogs')
        .get().then(snapshot => {
            const dbBlogs = snapshot.docs.map(doc => doc.data())
            setBlogs(dbBlogs)
        })
    }

    useEffect(() => {
        fetchData() 
    }, [])
        
    return (
        <BlogProvider.Provider 
            value={                
                {
                    blogs, 
                    setBlogs, 
                    filter, 
                    setFilter, 
                    allMonths, 
                    fetchData, 
                    isLogged,
                    setIsLogged
                }                
        }>
            {children}
        </BlogProvider.Provider>
    )
}
export default BlogProvider