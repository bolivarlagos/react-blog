import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Create from './Create'
import Footer from './Footer'
import SingleBlog from './SingleBlog'
import SearchResults from './SearchResults'
import Error from './Error'
import Login from './Login'
import {ContextProvider} from './BlogContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {  
  return (
    <ContextProvider>
      <Router>          
        <Navbar />          
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>        
          <Route path="/create">
            <Create />
          </Route>  
          <Route path="/single/:title">
            <SingleBlog/>
          </Route>
          <Route path="/search">
            <SearchResults/>
          </Route> 
          <Route path="/login">
            <Login />
          </Route>        
          <Route path="*">
            <Error/>
          </Route>                   
        </Switch>
        <Footer />             
      </Router> 
    </ContextProvider>    
  )  
}
export default App
