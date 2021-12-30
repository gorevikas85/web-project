import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './AboutUs';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <nav id="navbar">
                <Link id="link1" to="/">Home</Link>
                <Link id="link2" to="about">About Us</Link>
                <Link id="link3" to="contact">Contact Us</Link>
            </nav>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
