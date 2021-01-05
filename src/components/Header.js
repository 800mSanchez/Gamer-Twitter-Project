import React from 'react';
import "./Header.css";
import  Logo from './G-removebg-preview.png';
/* import Profile from './Profile';
 */
const Header = () => {
    return <header>
        <div className='logo-container'>
            <img alt='logo' src={Logo} className='logo'/>
        </div>
        <h1>Gamer</h1> 
            <nav className='navigation'>
                <ul>
                    <li>Profile</li>
                    <li>Front Page</li>
                    <li>Logout</li>
                </ul>
            </nav>
    </header>
}

export default Header;