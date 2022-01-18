import React from 'react'
import '../../../index.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Main_Logo from '../../../assets/logo/type_logo.png'




const Navbar = () => {
    return (
        <>
            {/* <img src={Bg_Img} className="inner-bg-img" alt="" /> */}
            <navbar className="nav-bar">
                <div className="nav-item">
                    <ul className="nav-primary">
                        <li><NavLink
                            to="/method"
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? 'underline' : 'none'
                                }
                            }}
                        >VÅR METOD</NavLink></li>
                        <li><NavLink
                            end
                            to="/blog"
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? 'underline' : 'none'
                                }
                            }}
                            activeClassName="active_class"
                        >BLOGG</NavLink></li>
                    </ul>
                    <NavLink end to="/">
                        <img src={Main_Logo} alt="" />
                    </NavLink>
                    <ul className="nav-secondary">
                        <li><NavLink
                            end
                            to="/contact"
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? 'underline' : 'none'
                                }
                            }}
                            activeClassName="active_class"
                        >KONTAKT</NavLink></li>
                        <li><NavLink
                            end
                            to="/about"
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? 'underline' : 'none'
                                }
                            }}
                            activeClassName="active_class"
                        >OM OSS</NavLink></li>
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
