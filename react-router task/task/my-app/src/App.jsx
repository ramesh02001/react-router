import {BrowserRouter as Router, Route,Link ,Routes} from 'react-router-dom'
import './App.css'
import All from './All'
import Cybersecurity from './CyberSecurity'
import Database from './Database'
 import Datascience from './Datascience'
function App() {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
            <h4 className="atl">Free Education</h4>
            <ul>
                 <li>Courses</li>
                 <li>LIVE Classes</li>
                 <li>Practice</li>
                 <li>Resource</li>
                
            </ul>
        </div>
    </div>
    <div className="nav-image">
    <img src="./img/front.jpg" alt="vinna" />
      <h2>We are professional by</h2>
    <Router>
    <div className="backnav">
        <nav>
            <ul className="ul1" >
                <li  >
                    <Link to="/" className='li1' > All</Link>
                </li>
               
                <li>
                    <Link to="/datasci" className='li1'> Data Science</Link>
                </li>
                <li>
                    <Link to="/cyber"  className='li1'> Cyber Security</Link>
                </li>
                <li>
                    <Link to="/database"  className='li1'>Database And Could Computing</Link>
                </li>
               
            </ul>
        </nav>
        <Routes>
            <Route path="/" exact  element={<All/>}></Route>
           
            <Route path="/datasci"     element={<Datascience/>}></Route>
            <Route path="/cyber"     element={< Cybersecurity/>}></Route>
            <Route path="/database"     element={< Database/>}></Route>
            
         </Routes>
    </div>
   </Router>
    </div>
    </>
  
    
  )
}
 export default App