import React from 'react'
import Main_Logo from '../../../assets/logo/type_logo.svg'
import Icon_Logo from '../../../assets/logo/gagnat_logo_black.svg'
import Bg_Img from '../../../assets/imgs/bg_img.png'
import Bg_Img_3 from '../../../assets/imgs/bg_img_3.png'
import trash_can from '../../../assets/imgs/trash_can.png'
import Stolar from '../../../assets/imgs/stolar.png'
import Partners from '../../../assets/imgs/partners.png'
import Lamp from '../../../assets/imgs/lamp.png'
import Outline_Button from '../../../components/atom/outline-button/Outline_Button'
import '../../../components/atom/outline-button/Outline_Button.css'
import Filled_Button from '../../../components/atom/filled-button/Filled_Button'
import '../../../components/atom/filled-button/Filled_Button.css'
import Circle from '../../../components/atom/circle/Circle'
import '../../../components/atom/circle/Circle.css'
import Feedback_Card from '../../molecule/feedback-card/Feedback_Card'
import '../../molecule/feedback-card/Feedback_Card.css'
import Footer from '../../../components/organism/footer/Footer'
import '../../../components/organism/footer/Footer.css'
import Navbar from '../../../components/organism/navbar/Navbar';
import '../../../components/organism/navbar/Navbar.css'
import Our_Method from '../../../components/organism/our-method/Our_Method';
import '../../../components/organism/our-method/Our_Method.css'
import './Main_Page.css'

const Main_Page = () => {
    return (
        <div className='main-page'>
            <header className="header-wrapper">
                <div className="nav-main-1">
                    <Navbar />
                </div>
                {/* <img src={Bg_Img} className="inner-bg-img" alt="" /> */}
                <div className="container">
                    <div className="split">
                        <div className="side-logo">
                            <img src={Icon_Logo} className="inner-logo-icon" alt="" />
                        </div>
                        <div className="body-type">
                            <h5>Skippa Tippen!
                                Välkommen till Gagnat
                            </h5>
                            <p>Platformen för återanvändning av företagsmöbler som har ett fortsatt användarvärde</p>
                            <div className="btns">
                                <Outline_Button title="Jag vill förmedla möbler" /><Filled_Button title="Jag vill ta emot möbler" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="main-partner-wrapper">
                <h2>Tidigare partners</h2>
                <div className="partners">
                    <img src={Partners} alt="" />
                </div>
            </section>
            <section className="main-stolar-wrapper">
                <div className="main-stolar-content">
                    <h2>Vad vi gör</h2>
                    <p>
                        Gagnat spelar en väsentlig roll i avfallshierkin, vi är sista chansen att göra nytta av det ni trott är skräp.
                    </p>
                    <p>
                        Genom att förmedla era gamla möbler för återanvädning sluter vi kretsloppet och gör ett positivt bidrag till den cirkulära ekonomin & kretslopet, med er hjälp.
                    </p>
                    <p>
                        Ni har möbler som är för fina och bra för att hamna på tippen, och med vår service ser vi till att deras liv förlängs istället för att slösas. Möblerna fortsätts att användas och skapar stort värde i andra ideela verksamheter.
                    </p>
                    <p>
                        Varje år slängs upp till 330 000 ton företags-
                        möbler. Det är alldeles för mycket.
                        Hittils har Gagnat förmedlat xxx möbler och sparat xxxx C02e
                    </p>
                </div>
                <div className="stolar-img">
                    <img src={Stolar} alt="" />
                </div>
            </section>

            <section className="main-section-btns">
                <h3>Var med och förläng möblernas livslängd idag</h3>
                <div className="cta-1"><Outline_Button title="Jag har möbler över" /><Filled_Button title="Jag vill ta emot möbler" /></div>

                <div className="tagline">
                    <div className="container-1">
                        <h3>5000kg CO2e sparat genom Gangats förmedling</h3>
                    </div>
                </div>
            </section>

            <div className="gag-values">
                <div className="gag-val-content">
                    <h2>Gagnats gyllene grunder</h2>
                    <div className="gag-circle">
                        <Circle title="SDG 4, 12, 17 läs mer" />
                        <Circle title="Sluter de cirkulära kretsloppet" />
                        <Circle title="Resursfördelar smart för planetens framtid" />
                    </div>
                </div>
                <div className="lamp-img"></div>
            </div>
            {/* <div className="lamp">
                <img src={Lamp} alt="" />
            </div> */}
            <div className="head-methods">
                <Our_Method />
            </div>
            <div className="trash">
                <div className="trash-content">
                    <h2>Varför vi bör återanvända</h2>
                    <p>Hur vi än vrider och vänder på det så tjänar alla på att ni återanvänder möbler.
                        Ni som partner tjänar på det genom reducerade tippavgifter.
                        Klimatet tjänar på det eftersom möblernas tekniska livslängd förlängs
                        Organisation tjänar på det genom att vända sig till återanvända möbler och inte belasta möbelproduktionen mer än nödvändigt.
                        Låt oss hjälpas åt att omfördela resurserna, skicka in möblerna i det cirkulära kretsloppet! </p>
                </div>
                <div className="trash-can">
                    <img src={trash_can} alt="" />
                </div>
                <div className="trash-content-1">
                    <h2>Mottagarna</h2>
                    <p>Organisationerna som ingår i vårt mottagarnätverk är skolor och
                        utbildningsinstanser, ideella föreningar med inriktning på barn och
                        unga, föreningar med inriktning på idrott, kultur, samhälle, miljö samt
                        religiösa samfund.

                        Vi är en värderingsstyrd organisation och ni kan lugnt luta er tillbaka
                        och vara säkra på att era förmedlade prylar hamnar där de gör
                        nytta. Vi tar totalt avstånd från verksamheter som uttrycker fientliga
                        åsikter. </p>
                </div>
                <div className="customer-review">
                    <h2>Nöjda partners & medlemmar</h2>
                    <div className="cust-review-dash"></div>
                    <div className="customer-feedback">
                        <Feedback_Card />
                        <Feedback_Card />
                        <Feedback_Card />
                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Main_Page
