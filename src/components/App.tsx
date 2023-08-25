import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import ComponentSelector from './ComponentSelector';

const App: React.FC= () => {
    const routeParams: string[] = ['modernKitchen', 'outsideBathroom', 'comfyBedroom', 'vintageKitchen', 'classicBathroom', 'retroBathroom'];
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                {routeParams.map((paramName: string) => (
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