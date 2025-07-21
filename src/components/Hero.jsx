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
            <div className="hero-badge">
              <span className="badge-icon">🏆</span>
              <span>Trusted Experts in Dental Care</span>
            </div>
            
            <h1 className="hero-title">
              Transform Your Smile with<br />
              <span className="highlight">Expert Dental Care</span>
            </h1>
            
            <div className="hero-stats-inline">
              <div className="inline-stat">
                <span className="stat-number">5000+</span>
                <span className="stat-text">Smiles Transformed</span>
              </div>
              <div className="inline-stat">
                <span className="stat-rating">4.9 ⭐</span>
                <span className="stat-text">Google Rating</span>
              </div>
              <div className="inline-stat">
                <span className="stat-number">FREE</span>
                <span className="stat-text">Consultation & Scan</span>
              </div>
              <div className="inline-stat">
                <span className="stat-number">0% EMI</span>
                <span className="stat-text">Starting ₹2,000/Month</span>
              </div>
            </div>

            <p className="hero-subtitle">
              Experience world-class dental treatments with advanced technology, 
              transparent pricing, and flexible payment options. Your perfect smile 
              is just one appointment away!
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToContact}>
                <span className="btn-icon">📅</span>
                Book FREE Consultation
              </button>
              <button className="btn btn-secondary" onClick={scrollToServices}>
                <span className="btn-icon">📞</span>
                Call Now: +91-123-456-7890
              </button>
            </div>

            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Advanced Equipment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Expert Dentists</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Painless Treatment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>

          <div className="hero-form">
            <div className="appointment-card">
              <div className="card-header">
                <h3>Get Your FREE Dental Check-up & Scan</h3>
                <p>Fill the form and book your appointment instantly!</p>
              </div>
              
              <form className="quick-form">
                <div className="form-group">
                  <input type="text" placeholder="Full Name*" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email ID*" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number*" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select City*</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                  </select>
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Service Needed</option>
                    <option value="braces">Braces Treatment</option>
                    <option value="aligners">Clear Aligners</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implant">Dental Implants</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="checkup">General Checkup</option>
                  </select>
                </div>
                
                <button type="submit" className="form-submit-btn">
                  Book Free Consultation & Scan
                </button>
                
                <div className="form-note">
                  <p>⚡ Instant booking confirmation</p>
                  <p>🔒 Your data is 100% secure</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="trust-indicators">
        <div className="container">
          <div className="indicators-grid">
            <div className="indicator">
              <div className="indicator-number">15+</div>
              <div className="indicator-text">Years Experience</div>
            </div>
            <div className="indicator">
              <div className="indicator-number">5000+</div>
              <div className="indicator-text">Happy Patients</div>
            </div>
            <div className="indicator">
              <div className="indicator-number">98%</div>
              <div className="indicator-text">Success Rate</div>
            </div>
            <div className="indicator">
              <div className="indicator-number">25+</div>
              <div className="indicator-text">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
