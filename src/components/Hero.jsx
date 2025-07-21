import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Smile is Our <span className="highlight">Priority</span>
            </h1>
            <p className="hero-subtitle">
              Experience world-class dental care at Ambica Dental Hospital. 
              Our expert team provides comprehensive dental treatments using 
              the latest technology in a comfortable, caring environment.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">✨</span>
                <span>Modern Equipment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">👨‍⚕️</span>
                <span>Expert Dentists</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💚</span>
                <span>Gentle Care</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn" onClick={scrollToContact}>
                Book Your Appointment
              </button>
              <button className="btn btn-secondary" onClick={scrollToServices}>
                Our Services
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              <div className="dental-illustration">
                <div className="tooth-icon">🦷</div>
                <div className="sparkle sparkle-1">✨</div>
                <div className="sparkle sparkle-2">✨</div>
                <div className="sparkle sparkle-3">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="scroll-indicator">
          <span>Discover More</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
