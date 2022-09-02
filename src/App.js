import Signup from './Components/Signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import {Usercontext} from "./context/Usercontext"
import Account from './Components/Account';
import Protectedroutes from './Components/Protectedroutes';
import Nextpage from './Components/Nextpage';
function App() {
  return (
    <div className="App">
    <Usercontext>
    <Router>
      <Routes>
      <Route path='/signup/Account' element={<Protectedroutes><Account/></Protectedroutes>}>
        <Route path='/signup/Account/next' element={<Nextpage/>}/>
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
