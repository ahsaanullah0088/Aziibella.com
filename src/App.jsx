import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import SignIn from './pages/SignIn/Signin';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
