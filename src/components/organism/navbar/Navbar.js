import React from 'react'
import '../../../index.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom'




const Navbar = () => {
    return (
        <>
            <div className="main-wrapper">
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
                        <li>
                            <NavLink end to="/">
                                <h1>GAGNAT</h1>
                            </NavLink>
                        </li>
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
            </div>
        </>
    )
}

export default Navbar
