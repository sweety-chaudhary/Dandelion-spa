import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

export const Footer = () => {
    return(
        <div className="footer-wraper">
            <h2 className="logo-text flex-dir">Dandelion</h2>
            <hr className="hr--small" />
            <ul className="navigation flex-dir">
                <li><Link to='/'>home</Link></li>
                <li><Link to='/shop'>shop</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/contact'>contact</Link></li>
            </ul>
            <p className="copy-rights flex-dir">© 2020, Dandelion</p>
            <p className="d-d flex-dir">Design & Developed with <span role="img" aria-label="purple heart" className="heart"> 💜 </span> by ŠŠ</p>
        </div>
    );
}