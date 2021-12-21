import React from 'react'
import Logo from '../../../assets/logo/type_logo.svg'
import Fb_icon from '../../../assets/icons/facebook.svg'
import Insta_icon from '../../../assets/icons/instagram.svg'
import In_icon from '../../../assets/icons/LinkedIn.svg'
import Input from '../../../components/atom/input-field/Input'
import '../../../components/atom/input-field/Input.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="gag-footer">
            <div className="footer-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="sides">
                <div className="contact-info">
                    <h3>Kontakt</h3>
                    <p>info@gagnat.se</p>
                    <div className="icons">
                        <img src={Fb_icon} alt="" />
                        <img src={In_icon} alt="" />
                        <img src={Insta_icon} alt="" />
                    </div>
                </div>
                <div className="links">
                    <ul >
                        <li onClick={() => { window.location.href = '/about' }} >Om oss</li>
                        <li onClick={() => { window.location.href = '/method' }} >Vår Metod</li>
                        <li onClick={() => { window.location.href = '/blog' }} >Blogg</li>
                        <li onClick={() => { window.location.href = '/method' }} >FAQ</li>
                    </ul>
                    
                </div>
                <div className="news-letter">
                    <p>Håll dig uppdaterad
                        med Gagnat</p>
                    <div className="input-item">
                        <Input/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
