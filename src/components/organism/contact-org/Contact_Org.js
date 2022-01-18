import React from 'react'
import Navbar from '../../../components/organism/navbar/Navbar';
import '../../../components/organism/navbar/Navbar.css'
import Footer from '../../../components/organism/footer/Footer'
import '../../../components/organism/footer/Footer.css'

const Contact_Org = () => {
    return (
        <div className="contact-org-1">
            <div className="contact-header-1">
                <div className="contact-nav-1">
                    <Navbar />
                </div>
                <div className="contact-section-1">
                    <div className="contact-info-1">
                        <div className="head-contact-section">
                            <h2>Kontakta Oss</h2>
                            <div className="contact-us-dash-line"></div>
                        </div>
                        <div className="info-1">
                            <h3>+46 811 11 11</h3>
                            <h5>info@gagnat.se</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="behaviour">
                <h3>Vill ni vara med och förändra återbruksbeteende i sverige?</h3>
                <p>Kontakta Gangat idag så hjälper vi er hitta enkel lösning för att förlänga era möblers livslängd 👊</p>
                <div className="behaviour-profiles">
                    <div className="profile-1">
                        <div className="contact-box-1"></div>
                        <p><span>Lina Lagerbäck</span> lina@gagnat.se 079-0793993</p>
                    </div>
                    <div className="profile-1">
                        <div className="contact-box-1"></div>
                        <p><span>Andreas König</span> andreas@gagnat.se 079-0793993</p>
                    </div>
                    <div className="profile-1">
                        <div className="contact-box-1"></div>
                        <p><span>Jonas Axelsson</span> jonas@gagnat.se 079-0793993</p>
                    </div>
                </div>
            </div>
            <div className="contact-bg-img">
            </div>
            <Footer />
        </div>
    )
}

export default Contact_Org
