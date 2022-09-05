import Signup from './Components/Signup';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import {Usercontext} from "./context/Usercontext"
import Protectedroutes from './Components/Protectedroutes';
import "./style.css"
import Loading from './Components/Loading';

import Navbar from './Components/Navbar';

const LazyAccount=React.lazy(()=>import('./Components/Account'))
const LazyOrders=React.lazy(()=>import('./Components/Orders'))
const LazyAdmin=React.lazy(()=>import('./Components/Admin'))

function App() {
  return (
    <div>
    <Usercontext>
    <Router basename='/signup'>
      <Routes>
      <Route path='/signup/navbar' element={<Protectedroutes><Navbar/></Protectedroutes>}>
      <Route path='/signup/navbar/account' element={<React.Suspense fallback={<Loading/>}><LazyAccount/></React.Suspense>}/>
        <Route path='/signup/navbar/orders' element={<React.Suspense fallback={<Loading/>}><LazyOrders/></React.Suspense>}/>
        <Route path='/signup/navbar/admin' element={<React.Suspense fallback={<Loading/>}><LazyAdmin/></React.Suspense>}/>
       

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
