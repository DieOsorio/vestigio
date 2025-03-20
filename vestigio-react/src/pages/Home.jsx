// src/App.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside'
import Banner from '../components/Banner';
import Furnitures from '../components/Furnitures'
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

const App = () => {
  return (
    <div className="font-sans min-h-screen relative bg-[#0f0804] z-[-2]">
      {/* Fondo de madera con fixed */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-[url('/images/textures/tapa.webp')] bg-repeat-x bg-contain z-[-1]" />

      <Navbar />
      <main className="bg-[#5f4327a6]">
        <Aside />
        <Banner />
        <Furnitures />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};





export default App;
