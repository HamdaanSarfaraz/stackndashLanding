import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Travelers from './components/Travelers';
import HowItWorks from './components/HowItWorks';
import StashPoints from './components/StashPoints';
import Partners from './components/Partners';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Travelers />
        <HowItWorks />
        <StashPoints />
        <Partners />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;