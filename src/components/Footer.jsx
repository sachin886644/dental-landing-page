import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🦷</span>
                <span className="logo-text">Ambica Dental Hospital</span>
              </div>
              <p className="footer-description">
                Your trusted partner for exceptional dental care. We combine 
                advanced technology with compassionate treatment to ensure 
                your smile is healthy, beautiful, and confident.
              </p>
              <div className="footer-stats">
                <div className="footer-stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="footer-stat">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Patients</div>
                </div>
                <div className="footer-stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                <li><button onClick={() => scrollToSection('team')}>Our Team</button></li>
                <li><button onClick={() => scrollToSection('testimonials')}>Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                <li><a href="#services">General Dentistry</a></li>
                <li><a href="#services">Cosmetic Dentistry</a></li>
                <li><a href="#services">Orthodontics</a></li>
                <li><a href="#services">Dental Implants</a></li>
                <li><a href="#services">Root Canal Treatment</a></li>
                <li><a href="#services">Emergency Care</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Dental Care Street, Medical Complex, Mumbai 400001</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <a href="tel:+912234567890">+91 22 3456 7890</a>
                    <br />
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:info@ambicadental.com">info@ambicadental.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Fri: 9AM-6PM<br />Sat: 9AM-4PM, Sun: 10AM-2PM</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Follow Us</h4>
              <div className="social-media">
                <a href="#" className="social-link">
                  <span className="social-icon">📘</span>
                  <span>Facebook</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div className="newsletter">
                <h5>Newsletter</h5>
                <p>Subscribe for dental health tips and updates</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <p>&copy; {currentYear} Ambica Dental Hospital. All rights reserved.</p>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <span>•</span>
                <a href="#terms">Terms of Service</a>
                <span>•</span>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>

            <div className="footer-badges">
              <div className="badge">
                <span className="badge-icon">🏆</span>
                <span className="badge-text">Excellence Award 2023</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✅</span>
                <span className="badge-text">Licensed & Certified</span>
              </div>
            </div>

            <button className="back-to-top" onClick={scrollToTop}>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
