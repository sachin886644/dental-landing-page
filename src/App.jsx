import React from 'react'
// Removed: import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Gallery from './components/Gallery'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-left font-sans">
      <Header />
      <Hero />
      <About />
  <Services />
  <Team />
  <Gallery />
  <BeforeAfter />
  <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
