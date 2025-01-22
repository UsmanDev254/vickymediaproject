import React, { lazy, Suspense } from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import NavbarComponent from '../Components/Header/Navbar';

const Home = lazy(() => import('../Pages/Home/Home'));
const About = lazy(() => import('../Pages/About/About'));
const Pricing = lazy(() => import('../Pages/Pricing/Pricing'));
const Portfolio = lazy(() => import('../Pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));

function WebRoutes(){
    return(
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
          <NavbarComponent />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    );
};

export default WebRoutes;
