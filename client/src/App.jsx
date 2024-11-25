import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
// import { ThemeProvider } from "styled-components";
import Navbar from './compoment/Navbar/navbar';
// import ButtonTop from './compoment/button-top/SideButton';
import Home from './pages/Home/Home';
import Service from './pages/Services/services'
import About from './pages/About Us/about';
import Contact from './pages/Contact Us/contact'
import { Routes, Route } from 'react-router-dom';
import Footer from './compoment/footer/footer';
import Uiux from './pages/UI & UX/uiux';
import Web from './pages/Webpage/Web';
import Social from './pages/Social Media/Social';
import Digital from './pages/Digital Marketing/Digital';
import Strategy from './pages/Content Strategy/strategy';

// const theme = {
//   colors: {
//     btn: "#3498db",   // Button color
//     primary: "#e74c3c", // Primary color for hover
//     shadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Box shadow
//     white: "#fff",
//   },
//   media: {
//     mobile: "768px",  // Mobile screen breakpoint
//   },
// };


function App() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/uiux' element={<Uiux />} />
        <Route path='/web' element={<Web />} />
        <Route path='/Social' element={<Social />} />
        <Route path='/Digital' element={<Digital />} />
        <Route path='/strategy' element={<Strategy />} />
      </Routes>
      {/* <ThemeProvider theme={theme}>
        <ButtonTop />
      </ThemeProvider> */}
      <Footer />
    </div>

  );
}

export default App;
