// // App.js

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AboutUs from './Components/About';
// const CardCarousel = lazy(() => import('./Components/cardCarousal'));

// const HomePage = lazy(() => import('./Components/Home'));
// const About = lazy(() => import('./Components/About'));
// const Menu = lazy(() => import('./Components/Menu'));
// const ContactPage = lazy(() => import('./Components/contact'));

// const App = () => {
//   return (
//     <div>

//     <div id="home">
//       <HomePage />
//     </div>
//     <div id="menu">
//       <Menu />
//     </div>
//     <div id="services">
//       <CardCarousel />
//     </div>
//     <div id="about-us">
//       <About />
//     </div>
//     <div id="contact">
//       <ContactPage />
//     </div>
   
//   </div>
//   );
// };

// export default App;
// App.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
const CardCarousel = lazy(() => import('./Components/cardCarousal'))
const HomePage = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'));
const Menu = lazy(() => import('./Components/Menu'));
const ContactPage = lazy(() => import('./Components/contact'));

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/services">Services</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<CardCarousel />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

