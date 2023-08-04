import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ModernKitchen from './ModernKitchen';
import OutsideBathroom from './OutsideBathroom';
import ComfyBedroom from './ComfyBedroom';
import VintageKitchen from './VintageKitchen';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/contact' exact element={<Contact />} />
                <Route path='/projects/:modernKitchen' element={<ModernKitchen />} />
                <Route path='/projects/:outsideBathroom' element={<OutsideBathroom />} />
                <Route path='/projects/:comfyBedroom' element={<ComfyBedroom />} />
                <Route path='/projects/:vintageKitchen' element={<VintageKitchen />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App