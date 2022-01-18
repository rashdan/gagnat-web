import './App.css';
import { Routes, Route, } from "react-router-dom";

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

import Faqs from './components/molecule/faqs/Faqs'
import './components/molecule/faqs/Faqs.css'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/method" element={<Method />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
    </div>
  );
}

export default App;
