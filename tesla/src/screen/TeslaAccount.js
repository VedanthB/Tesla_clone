import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Car from '../components/Car'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './TesalAccount.css'
import Header from '../components/Header'

function TeslaAccount() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()
  
    const logoutOfApp = () => {
      auth
        .signOut()
        .then(() => {
          dispatch(logout())
          history.push('/')
        })
        .catch((error) => alert(error.message))
    }

    
    return (
        <div>
           <Header />
             <div className='teslaAccount__info'>
                 <div className='teslaAccount__person'>
                    <h4>{user?.displayName + "'s"} Tesla</h4>
                 </div>
                   <div className='teslaAccount__infoRight'>
                       <Link>Home</Link>
                       <Link>Account</Link>
                       <Link>History</Link>
                       <Link onClick={logoutOfApp}>Sign out</Link>
                 </div>
             </div>

             <div className='teslaAccount__car'>
                 <Car
                   imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815'
                   model='model s'
                   testDrive
                  />
                  <Car
                      imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815'
                      model='model x'
                   />
              </div>
        </div>
    )
}

export default TeslaAccount
