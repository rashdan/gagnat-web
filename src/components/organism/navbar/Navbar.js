import React from 'react'
import Logo from '../../../assets/logo/gagnat_logo.svg'

const Navbar = () => {
    return (
        <div className="main-nav">
            <div className="logo">
                <a><img src={Logo} className="logo-inner" alt="" /></a>
            </div>
            <ul>
                <li className="item"><a>Hem</a></li>
                <li className="item"><a>Kategorier</a></li>
                <li className="item"><a>Profil</a></li>
            </ul>
        </div>
    )
}

export default Navbar
