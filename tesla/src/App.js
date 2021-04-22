import './App.css';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import LandingPage from './screen/LandingPage';
import TeslaAccount from './screen/TeslaAccount';
import { useEffect } from 'react';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase'
import Signup from './screen/Signup';
import Login from './screen/Login';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  

  return (
    <div className="App">
     <Router>

       
         
         <Switch>
           <Route path='/account'>
             {!user? <Signup /> : <TeslaAccount />}
           </Route>

            <Route path='/signup'>
              <Signup />
            </Route>
            
            <Route path='/login'>
              <Login />
            </Route>

           <Route>
               <LandingPage path='/' />
            </Route>

         </Switch>  

     </Router>     
    </div>
  );
}

export default App;
