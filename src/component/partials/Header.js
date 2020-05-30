import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    return (
        <nav>
            <div className="logo"><Link to='/'>logo</Link></div>
            <ul className="navigation flex">
            <li><Link to='/'>home</Link></li>
            <li><Link to='/shop'>shop</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/contact'>contact</Link></li>
            </ul>
        </nav>
    );
}