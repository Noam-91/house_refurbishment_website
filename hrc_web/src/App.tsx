import React from 'react';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from "./pages/service/Services.tsx";
import ServiceDetail from "./pages/service/ServiceDetail.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/project/Projects.tsx";
import Auth from "./pages/Auth.tsx";
import store from "./redux/store.ts";
import {Provider} from "react-redux";
import Blogs from "./pages/blog/Blogs.tsx";
import ProjectDetail from "./pages/project/ProjectDetail.tsx";
import BlogDetail from "./pages/blog/BlogDetail.tsx";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Theme appearance="inherit" radius="large" scaling="100%">
                <Router>
                    <main className="min-h-screen">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/auth/*" element={<Auth />} />
                            <Route path="/services" element={<Services />} />
                            <Route path={"/services/:workType"} element={<ServiceDetail />} />
                            <Route path={"/projects"} element={<Projects />} />
                            <Route path={"/projects/:id"} element={<ProjectDetail />} />
                            <Route path={"/blogs"} element={<Blogs />} />
                            <Route path={"/blogs/:id"} element={<BlogDetail />} />
                            <Route path={"/about"} element={<About />} />
                            <Route path={"/contact"} element={<Contact />} />
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
        </Provider>
    );
};

export default App;