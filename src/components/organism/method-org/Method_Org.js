import React from 'react'
import Navbar from '../../../components/organism/navbar/Navbar';
import '../../../components/organism/navbar/Navbar.css'
import Our_Method from '../../../components/organism/our-method/Our_Method';
import '../../../components/organism/our-method/Our_Method.css'
import Outline_Button from '../../../components/atom/outline-button/Outline_Button'
import '../../../components/atom/outline-button/Outline_Button.css'
import Filled_Button from '../../../components/atom/filled-button/Filled_Button'
import '../../../components/atom/filled-button/Filled_Button.css'
import Faq from '../../../components/organism/faq/Faq';
import '../../../components/organism/faq/Faq.css'
import Partners from '../../../assets/imgs/partners.png'
import Footer from '../../../components/organism/footer/Footer'
import '../../../components/organism/footer/Footer.css'

const Method_Org = () => {
    return (
        <div className="main-method-org">
            <div className="method-header-1">
                <div className="method-nav-1">
                    <Navbar />
                </div>
                <div className="method-section-1">
                    <h2>Vår Metod</h2>
                    <div className="partner-member-1">
                        <div className="partner-1">
                            <h3>Partners</h3>
                            <p>Företag eller myndighet*, som ska flytta, renovera eller fräscha upp sina kontor. Vid omvandling så finns dugliga möbler över avsed för återvinning</p>
                        </div>
                        <div className="member-1">
                        <h3>Medlemmar</h3>
                        <p>Skolor, ideela föreningar och icke-vinstdrivande organisationer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="method-section-2">
                <Our_Method/>
            </div>
            <section className="method-cta-2">
                <h3>Var med och förläng möblernas livslängd idag</h3>
                <div className="cta-1"><Outline_Button title="Jag har möbler över" /><Filled_Button title="Jag vill ta emot möbler" /></div>
            </section>
            <section className="Faq-section">
                <h2>FAQ</h2>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
            </section>
            <section className="partners-2">
                <h2>Tidigare partners</h2>
                <div className="partners">
                    <img src={Partners} alt="" />
                </div>
            </section>
            <footer className="method-2">
                <Footer/>
            </footer>
        </div>
    )
}

export default Method_Org
