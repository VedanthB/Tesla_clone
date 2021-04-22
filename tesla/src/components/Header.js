import React from 'react'
import { useHistory } from 'react-router'
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import './Header.css'



function Header() {
   const history = useHistory()

    return (
        <div className='header'> 
            <div className='header__logo'>
                <img 
                 onClick={() => history.push('/')}
                 src={TeslaLogo} 
                 alt='tesla logo' />
            </div>

            <div className='header__center' >
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className='header__right'>
                <p >Shop</p>
                <p  onClick={() => history.push('/account')} >Tesla Account</p>               
            </div>
        </div>
    )
}

export default Header
