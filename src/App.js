import Signup from './Components/Signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import {Usercontext} from "./context/Usercontext"
import Account from './Components/Account';
import Protectedroutes from './Components/Protectedroutes';
import "./style.css"
import Orders from './Components/Orders';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
    <Usercontext>
    <Router>
      <Routes>
      <Route path='/signup/navbar' element={<Protectedroutes><Navbar/></Protectedroutes>}>
      <Route path='/signup/navbar/account' element={<Account/>}/>
        <Route path='/signup/navbar/orders' element={<Orders/>}/>
      </Route>
       
    
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signup/login' element={<Login/>}/>
        
      </Routes>
    </Router>
    </Usercontext>
   
    </div>
  );
}

export default App;
