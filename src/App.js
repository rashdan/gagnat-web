import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


import Question from './components/atom/question/Question'
import './components/atom/question/Question.css'

import Main_Page from './components/organism/main-page/Main_Page'
import './components/organism/main-page/Main_Page.css'

import Navbar from './components/organism/navbar/Navbar';
import './components/organism/navbar/Navbar.css'

import Method_Org from './components/organism/method-org/Method_Org';
import './components/organism/method-org/Method_Org.css'

import Our_Method from './components/organism/our-method/Our_Method';
import './components/organism/our-method/Our_Method.css'

import Faq from './components/organism/faq/Faq';
import './components/organism/faq/Faq.css'

import Blog_Org from './components/organism/blog-org/Blog_Org'
import './components/organism/blog-org/Blog_Org.css'

import Contact_Org from './components/organism/contact-org/Contact_Org'
import './components/organism/contact-org/Contact_Org.css'

import Home from './pages/home-page/Home'
import './pages/home-page/Home.css'

import Method from './pages/methods/Method'
import './pages/methods/Method.css'

import Blog from './pages/blog/Blog'
import './pages/blog/Blog.css'

import Contact from './pages/contact/Contact'
import './pages/contact/Contact.css'

import About from './pages/about/About'
import './pages/about/About.css'


// import Input from './components/atom/input-field/Input'
// import './components/atom/input-field/Input.css'

// import Label from './components/atom/label/Label'
// import './components/atom/label/Label.css'



// import Login from './pages/login/Login';
// import './pages/login/Login.css'
// import './pages/add_project/Addproject.css'
// import Addproject from './pages/add_project/Addproject';
// import './pages/add_extra_proj/AddExtraProj.css';
// import AddExtraProj from './pages/add_extra_proj/AddExtraProj';
// import EditProj from './pages/edit_project/EditProj';
// import './pages/edit_project/EditProj.css';
// import AddNewObj from './pages/add_new_obj/AddNewObj';
// import './pages/add_new_obj/AddNewObj.css';
// import Filled_Button from './components/atom/filled-button/Filled_Button'
// import './components/atom/filled-button/Filled_Button.css'
// import Outline_Button from './components/atom/outline-button/Outline_Button'
// import './components/atom/outline-button/Outline_Button.css'
// import Feedback_Card from './components/molecule/category/feedback-card/Feedback_Card'
// import './components/molecule/category/feedback-card/Feedback_Card.css'

// import Footer from './components/organism/footer/Footer'
// import './components/organism/footer/Footer.css'
// import Add_btn from './components/atom/add/Add_btn'
// import './components/atom/add/Add_btn.css'
// import Box from './components/atom/box/Box'
// import './components/atom/box/Box.css'
// import Circle from './components/atom/circle/Circle'
// import './components/atom/circle/Circle.css'
// import Category from './components/molecule/category/Category'
// import './components/molecule/category/Category.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Contact_Org />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/method" element={<Method />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Category/> */}
      {/* <Circle/> */}
      {/* <Box/> */}
      {/* <Add_btn/> */}
      {/* <Input/> */}
      {/* <Label/> */}
      {/* <Login/> */}
      {/* <Navbar /> */}
      {/* <Footer/> */}
      {/* <Filled_Button/> */}
      {/* <Outline_Button/> */}
      {/* <Feedback_Card/> */}
      {/* <Main_Page/> */}
      {/* <Addproject/> */}
      {/* <AddExtraProj/> */}
      {/* <EditProj/> */}
      {/* <AddNewObj/> */}
    </div>
  );
}

export default App;
