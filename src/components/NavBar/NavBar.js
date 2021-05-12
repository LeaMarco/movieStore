import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.svg';
import {ReactComponent as Fav}  from '../../img/favorites.svg';
import {ReactComponent as Home} from '../../img/home.svg'


import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="pageTitle">
                <NavLink exact to="/" className="btn">
                    <img id="logoHenry" src={Logo} width="70" height="70" className="rotateimg" alt="" />
                    <h1 className="logoText">MovieStore</h1>
                </NavLink>
            </div>
            <nav>
                <ul className="list">
                    <div className="list-item">
                        <NavLink exact to="/" className="btn">
                            <Home className="topIcons"/>
                            <div classname="btnText">Home</div>
                        </NavLink>
                    </div>
                    <div className="list-item">
                        <NavLink to="/favs" className="btn">
                            <Fav className="topIcons"/>
                            <div classname="btnText">Favorites</div>
                        </NavLink>   
                    </div>
                </ul>
            </nav>
        </header>
    )
}