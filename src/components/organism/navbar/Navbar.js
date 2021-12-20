import React from 'react'
import { Link } from 'react-router-dom'
import Main_Logo from '../../../assets/logo/type_logo.png'




const Navbar = () => {
    return (
        <>
            {/* <img src={Bg_Img} className="inner-bg-img" alt="" /> */}
            <navbar className="nav-bar">    
                <div className="nav-item">
                    <ul className="nav-primary">
                        <li><Link to="/method">VÅR METOD</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                    </ul>
                    <Link to="/">
                        <img src={Main_Logo} alt="" />
                    </Link>
                    <ul className="nav-secondary">
                        <li><Link to="/contact">KONTAKT</Link></li>
                        <li><Link to="/about">OM OSS</Link></li>
                    </ul>
                </div>

            </navbar>
        </>
        /* <div className="side-logo">
            <img src={Icon_Logo} className="inner-logo-icon" alt="" />
        </div>
        <div className="body-type">
            <h2>Skippa Tippen!
                Välkommen till Gagnat
            </h2>
            <p>Platformen för återanvändning av företagsmöbler som har ett fortsatt användarvärde</p>
            <div className="btns">
                <Outline_Button title="Jag har möbler över" /><Filled_Button title="Jag vill ta emot möbler" /><Outline_Button title="Jag vill förmedla möbler" />
            </div>
        </div> */
    )
}

export default Navbar
