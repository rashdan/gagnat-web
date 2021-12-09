import React from 'react'
import Navbar from '../../../components/organism/navbar/Navbar';
import '../../../components/organism/navbar/Navbar.css'
import Feedback_Card from '../../../components/molecule/feedback-card/Feedback_Card'
import '../../../components/molecule/feedback-card/Feedback_Card.css'
import Footer from '../../../components/organism/footer/Footer'
import '../../../components/organism/footer/Footer.css'

const About_Org = () => {
    return (
        <div className="About-org-1">
            <div className="about-header-1">
                <div className="about-nav-1">
                    <Navbar />
                </div>
                <div className="about-section-1">
                    <h2>Om Oss</h2>
                    <p>Säg hej till oss som ligger bakom Gagnat! Det är Lina, Andreas och Jonas. Tillsammans har vi flera års erfarenheter av att driva bolag som sociala- och tech-entreprenörer, jobba med impactrelaterade uppgifter, och framförallt förmedla möbler. Vi har dessutom lite tjusiga utmärkelser i bagaget. Men skalar vi av allt det där så är vi i grund och botten ett gäng snälla, öppna, nyfikna och samhällsengagerade individer.  (Bättre att lägga till en kredig merit än säga att ni är snälla)</p>

                    <p>Vi driver och utvecklar Gagnat för att Gagnat behövs. Med tanke på att det slängs så otroligt mycket företagsmöbler insåg vi att det finns en lucka i systemet att avveckla företagsmöbler. Gamla möbler används idag tillsammans med ny inredning. Därefter försäljning på begagnatmarknaden, och sist går det överblivna på tipp.</p>

                    <p>Glappet mellan begagnatmarknaden och tippen är stort. Gaaalet stort! Här saknas ett systematiskt, transparent och storskaligt system för att omhänderta och distribuera ut dessa företagsmöbler. Lyckas vi behålla dessa möbler i omlopp och fortsätta brukas finns det stora klimatvinster, för att inte tala om samhällsvinster.</p>

                    <p>Kan man säga att Gagnat är sprunget ur ren desperation? Ur klimatångest och frustration över ett system som inte tar tillvara på sina resurser? Absolut, det kan man säga! Men också ur en passion, ett driv och en lust till att skapa förändring. För vi tror verkligen på att vi kan vara delaktiga i att skapa normförändrande beteenden hos företag och individer. Genom att pussla ihop flera delar tar vi ett holistiskt ansvar. Vi tar också ett gemensamt ansvar för att arbeta för FN:s hållbarhetsmål, framförallt mål nummer 12, hållbar produktion och konsumtion.</p>

                    <p>Vill du veta mer om Gagnat, om hur mycket företagsmöbler som slängs, vilka som har använt förmedlingstjänsten tidigare, hur man gör för att bli mottagare eller bara är generellt nyfiken? Maila eller ring till Lina, det här är hennes favoritämnen.
                    </p>
                </div>
                <div className="about-bg-img">
                    <div className="about-content-1">
                    <h2>Nöjda partners & medlemmar</h2>
                    </div> 
                </div>
                <div className="about-partner-1">
                    <Feedback_Card/>
                    <Feedback_Card/>
                    <Feedback_Card/>
                </div>
                <div className="about-footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default About_Org
