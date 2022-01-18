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
import Faqs from '../../../components/molecule/faqs/Faqs'
import '../../../components/molecule/faqs/Faqs.css'

const Method_Org = () => {
    return (
        <div className="main-method-org">
            <div className="method-header-1">
                <div className="method-nav-1">
                    <Navbar />
                </div>
                <div className="method-section-1">
                    <div className="our-method-head">
                        <h2>Vår Metod</h2>
                        <div className="our-method-dash"></div>
                    </div>
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
                <div className="method-title-1">
                    <h3>1- Flytten Går</h3>
                    <p>En partner ska
                        flytta eller renovera
                        kontoret och har
                        dugliga möbler över
                        som tänkt åka till
                        tippen</p>
                </div>
                <div className="method-title-2">
                    <h3>2 - Återliva Möbler</h3>
                    <p>Skippa tippen! 300k
                        ton möbler slängs varje
                        år. Kontakta oss på
                        Gagnat eller logga in
                        på platformen</p>
                </div>
                <div className="method-title-3">
                    <h3>3. Inventering</h3>
                    <p>Ta bilder på möbler
                        som ni vill bli av med,
                        och lägg upp på
                        platformen för att
                        återlivas</p>
                </div>
                <div className="method-title-4">
                    <h3>4 - Den perfekta matchen</h3>
                    <p>Medlemmar tingar
                        möbler via
                        platformen och blir
                        matchad med den
                        partner som har
                        möbler över </p>
                </div>
                <div className="method-title-5">
                    <h3>5 - Cirkulära Livet</h3>
                    <p>Partner och medlemmen
                        kommer överrens om leverans.
                        En rapport av
                        miljöbesparingarna skickas till
                        partnern samt miljöcertifikat </p>
                </div>
            </div>
            <section className="method-cta-2">
                <h3>Var med och förläng möblernas livslängd idag</h3>
                <div className="cta-1"><Outline_Button title="Jag har möbler över" /><Filled_Button title="Jag vill ta emot möbler" /></div>
            </section>
            <section className="faq-bg-1">
            <section className="Faq-section">
                <h2>FAQ</h2>
                <Faqs />
            </section>
            </section>
            <section className="partners-2">
                <h2>Tidigare partners</h2>
                <div className="partners">
                    <img src={Partners} alt="" />
                </div>
            </section>
            <footer className="method-2">
                <Footer />
            </footer>
        </div>
    )
}

export default Method_Org
