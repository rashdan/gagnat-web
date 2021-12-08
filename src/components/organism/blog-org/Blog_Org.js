import React from 'react'
import Navbar from '../../../components/organism/navbar/Navbar';
import '../../../components/organism/navbar/Navbar.css'
import Footer from '../../../components/organism/footer/Footer'
import '../../../components/organism/footer/Footer.css'


const Blog_Org = () => {
    return (
        <div className="blog-org-1">
            <div className="blog-header-1">
                <div className="blog-nav-1">
                    <Navbar />
                </div>
                <div className="gag-blog-head-1">
                    <h2>Gagnat Blogg</h2>          
                </div>
            </div>
            <div className="blog-section">
                <div className="blog-stolar"> 
                </div>
                <div className="blog-containers-1">
                    <div className="blog-container-1">
                        <h3>Återbruks Caset</h3>
                        <p>av Lina Lagerbäck, 10 juni 2021</p>
                    </div>
                    <div className="blog-container-2">
                        <h3>Omställningen till cirkulär ekonomi: ”Ett gyllene tillfälle för svenska teknikföretag”</h3>
                        <p>av Lisa von Garrelts via techarenan, 18 feb 2021</p>
                    </div>
                    <div className="blog-container-3">
                        <h3>Sustainable Development Goals och varför vi måste agera nu!</h3>
                        <p>av Lina Lagerbäck, 14 april 2021</p>
                    </div>
                    <div className="blog-container-4">
                        <h3>Tele2 och Botkyrka bibliotek</h3>
                        <p>av Lina Lagerbäck, 14 april 2021</p>
                    </div>
                </div>
            </div>
            <div className="blog-bg-1">
            </div>
            <div className="blog-footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog_Org
