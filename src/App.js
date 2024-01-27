// App.js
import React from 'react';
import HeroSection from './HeroSection';
import ConsultationForm from './ConsultationForm';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <ConsultationForm />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
