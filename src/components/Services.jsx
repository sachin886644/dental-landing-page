import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Comprehensive oral health care including checkups, cleanings, fillings, and preventive treatments to maintain your dental health.',
      features: ['Regular Checkups', 'Professional Cleaning', 'Cavity Treatment', 'Preventive Care']
    },
    {
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our aesthetic dental treatments designed to enhance the appearance of your teeth and boost confidence.',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers', 'Bonding & Contouring']
    },
    {
      icon: '🔧',
      title: 'Restorative Dentistry',
      description: 'Repair and restore damaged teeth to their natural function and appearance using advanced dental techniques and materials.',
      features: ['Dental Crowns', 'Bridges', 'Dentures', 'Tooth Restoration']
    },
    {
      icon: '🦴',
      title: 'Oral Surgery',
      description: 'Specialized surgical procedures including tooth extractions, wisdom tooth removal, and other oral surgical treatments.',
      features: ['Tooth Extraction', 'Wisdom Teeth', 'Implant Surgery', 'Jaw Surgery']
    },
    {
      icon: '🔬',
      title: 'Endodontics',
      description: 'Root canal therapy and treatments for infected or damaged tooth pulp to save your natural teeth and relieve pain.',
      features: ['Root Canal Therapy', 'Pulp Treatment', 'Pain Relief', 'Tooth Preservation']
    },
    {
      icon: '🧒',
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children and adolescents in a friendly, comfortable environment designed for young patients.',
      features: ['Child-Friendly Care', 'Preventive Treatment', 'Early Intervention', 'Dental Education']
    }
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Comprehensive dental care services to meet all your oral health needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <div className="service-content">
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-footer">
                <button className="service-btn">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Need a Consultation?</h3>
            <p>
              Our expert dentists are ready to provide personalized treatment plans 
              tailored to your specific needs and budget.
            </p>
            <div className="cta-actions">
              <button className="btn">Book Consultation</button>
              <div className="cta-contact">
                <span>or call us at</span>
                <a href="tel:+1234567890" className="phone-link">(123) 456-7890</a>
              </div>
            </div>
          </div>
          
          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon">💰</div>
              <div className="cta-feature-text">
                <div className="cta-feature-title">Affordable Plans</div>
                <div className="cta-feature-desc">Flexible payment options</div>
              </div>
            </div>
            
            <div className="cta-feature">
              <div className="cta-feature-icon">🕒</div>
              <div className="cta-feature-text">
                <div className="cta-feature-title">Emergency Care</div>
                <div className="cta-feature-desc">24/7 emergency support</div>
              </div>
            </div>
            
            <div className="cta-feature">
              <div className="cta-feature-icon">🛡️</div>
              <div className="cta-feature-text">
                <div className="cta-feature-title">Insurance Accepted</div>
                <div className="cta-feature-desc">Most insurance plans welcomed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
