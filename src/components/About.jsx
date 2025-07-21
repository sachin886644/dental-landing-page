import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-title text-left">
              <h2>About Ambica Dental Hospital</h2>
              <p>
                Committed to providing exceptional dental care with a personal touch
              </p>
            </div>
            
            <div className="about-description">
              <p>
                For over 15 years, Ambica Dental Hospital has been at the forefront of 
                dental excellence, providing comprehensive oral health care to our community. 
                We combine advanced dental technology with compassionate care to ensure 
                every patient receives the highest quality treatment in a comfortable environment.
              </p>
              
              <p>
                Our state-of-the-art facility is equipped with the latest dental technology, 
                including digital X-rays, laser dentistry, and advanced sterilization systems. 
                We believe that preventive care is the foundation of good oral health, and we 
                work closely with each patient to develop personalized treatment plans.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🏥</div>
                <div className="highlight-content">
                  <h4>Modern Facility</h4>
                  <p>State-of-the-art equipment and comfortable environment</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🔬</div>
                <div className="highlight-content">
                  <h4>Advanced Technology</h4>
                  <p>Latest dental innovations for precise and painless treatments</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">💝</div>
                <div className="highlight-content">
                  <h4>Patient-Centered Care</h4>
                  <p>Personalized treatment plans tailored to your needs</p>
                </div>
              </div>
            </div>

            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                "To provide exceptional dental care that improves not just smiles, 
                but overall quality of life. We are committed to building lasting 
                relationships with our patients based on trust, respect, and 
                outstanding results."
              </p>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="main-image">
                <div className="placeholder-content">
                  <div className="dental-office-illustration">
                    <div className="office-icon">🏥</div>
                    <div className="patients-icon">👥</div>
                    <div className="heart-icon">❤️</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card">
                <div className="card-content">
                  <div className="award-icon">🏆</div>
                  <div className="award-text">
                    <div className="award-title">Excellence Award</div>
                    <div className="award-subtitle">Best Dental Care 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements">
          <div className="achievement">
            <div className="achievement-icon">🎯</div>
            <div className="achievement-number">15+</div>
            <div className="achievement-label">Years of Excellence</div>
          </div>
          
          <div className="achievement">
            <div className="achievement-icon">😊</div>
            <div className="achievement-number">5000+</div>
            <div className="achievement-label">Satisfied Patients</div>
          </div>
          
          <div className="achievement">
            <div className="achievement-icon">⭐</div>
            <div className="achievement-number">4.9</div>
            <div className="achievement-label">Average Rating</div>
          </div>
          
          <div className="achievement">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-number">25+</div>
            <div className="achievement-label">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
