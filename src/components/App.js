import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ComponentSelector from './ComponentSelector';

const App = () => {
    const routeParams = ['modernKitchen', 'outsideBathroom', 'comfyBedroom', 'vintageKitchen', 'classicBathroom', 'retroBathroom'];
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/contact' exact element={<Contact />} />
                {routeParams.map((paramName) => (
                    <Route 
                        key={paramName}
                        path={`/projects/${paramName}`}
                        element={<ComponentSelector paramName={paramName} />} 
                    />
                ))}
            </Routes>
            <Footer />
        </Router>
    )
}

export default App