import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import {logoutUser, getUser} from '../redux/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import  Logo from './G-removebg-preview.png';
/* import Profile from './Profile';
 */
class Header extends React.Component {

    componentDidMount(){
        this.props.getUser();
    }

    logout = () => {
        axios.get('/auth/logout').then( res => {
            this.props.logoutUser();
            this.props.history.push('/');
        }).catch(err => console.log(err))
    }

render(){
 return <header>
        <div className='logo-container'>
            <img alt='logo' src={Logo} className='logo'/>
        </div>
        <h1>Gamer</h1> 
        <nav className='navigation'>
            <ul>
                <li>Profile</li>
                <li>Front Page</li>
                <li><button className="logout-btn" onClick={this.logout}><Link to="/">Logout</Link></button></li>
            </ul>
        </nav>
    </header>

    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(Header);