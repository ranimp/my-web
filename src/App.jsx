import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero';
import About from './components/about';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-white">
      <Hero />
      <About />
    </div>
  );
};

export default App;
