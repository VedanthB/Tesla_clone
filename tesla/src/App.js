import './App.css';
import Header from './components/Header';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import LandingPage from './screen/LandingPage';
import TeslaAccount from './screen/TeslaAccount';
import { useEffect } from 'react';
import { login, logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase'



function App() {
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

        <Header />
         
         <Switch>
           <Route path='/account'>
              <TeslaAccount />
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
