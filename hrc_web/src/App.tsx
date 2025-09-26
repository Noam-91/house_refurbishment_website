import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";

const App: React.FC = () => {
    return (
        <Theme appearance="inherit" radius="large" scaling="100%">
            <Router>
                <main className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path={"/services/:workType"} element={<ServiceDetail />}/>
                        <Route path={"/projects"} element={<Projects />}/>
                        <Route path={"/about"} element={<About />}/>
                        <Route path={"/contact"} element={<Contact />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        newestOnTop
                        closeOnClick
                        pauseOnHover
                    />
                </main>
            </Router>
        </Theme>
    );
}

export default App;