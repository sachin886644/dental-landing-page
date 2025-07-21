import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Mumbai',
      rating: 5,
      text: 'Ambica Dental Hospital transformed my smile completely! The staff is incredibly professional and caring. Dr. Rajesh explained every procedure clearly and made me feel comfortable throughout my treatment. I highly recommend this place!',
      treatment: 'Smile Makeover',
      image: '👩'
    },
    {
      name: 'Michael Chen',
      location: 'Delhi',
      rating: 5,
      text: 'I was terrified of dental procedures, but the team at Ambica made the entire experience painless and stress-free. The technology they use is impressive, and the results exceeded my expectations. Thank you for giving me my confidence back!',
      treatment: 'Root Canal & Crown',
      image: '👨'
    },
    {
      name: 'Priya Sharma',
      location: 'Pune',
      rating: 5,
      text: 'Taking my kids to Ambica Dental was the best decision. Dr. Sneha is amazing with children - she made my 7-year-old actually excited about dental visits! The child-friendly environment and gentle approach are outstanding.',
      treatment: 'Pediatric Care',
      image: '👩'
    },
    {
      name: 'David Wilson',
      location: 'Bangalore',
      rating: 5,
      text: 'After years of avoiding the dentist, I finally found a place I trust. The consultation was thorough, prices were transparent, and the quality of work is exceptional. My dental implants look and feel completely natural!',
      treatment: 'Dental Implants',
      image: '👨'
    },
    {
      name: 'Anjali Patel',
      location: 'Chennai',
      rating: 5,
      text: 'The orthodontic treatment I received was life-changing. Dr. Priya guided me through the entire process with patience and expertise. My teeth are perfectly aligned now, and I can\'t stop smiling!',
      treatment: 'Invisalign Treatment',
      image: '👩'
    },
    {
      name: 'Robert Kumar',
      location: 'Hyderabad',
      rating: 5,
      text: 'Emergency dental care at its finest! When I had a severe toothache at midnight, they were available and provided immediate relief. The 24/7 emergency service is a lifesaver. Professional and compassionate team!',
      treatment: 'Emergency Care',
      image: '👨'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Patients Say</h2>
          <p>
            Real stories from real patients who trust us with their smiles
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-slider">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card card">
                    <div className="testimonial-header">
                      <div className="patient-info">
                        <div className="patient-avatar">
                          <span className="avatar-icon">{testimonial.image}</span>
                        </div>
                        <div className="patient-details">
                          <h4 className="patient-name">{testimonial.name}</h4>
                          <p className="patient-location">{testimonial.location}</p>
                          <div className="treatment-tag">
                            {testimonial.treatment}
                          </div>
                        </div>
                      </div>
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    <div className="testimonial-content">
                      <div className="quote-icon">"</div>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevTestimonial}>
              ←
            </button>
            <button className="slider-btn next" onClick={nextTestimonial}>
              →
            </button>
          </div>

          <div className="slider-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <div className="stat-icon">😊</div>
            <div className="stat-number">98%</div>
            <div className="stat-label">Patient Satisfaction</div>
          </div>
          
          <div className="stat">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          
          <div className="stat">
            <div className="stat-icon">💬</div>
            <div className="stat-number">1000+</div>
            <div className="stat-label">Positive Reviews</div>
          </div>
          
          <div className="stat">
            <div className="stat-icon">🔄</div>
            <div className="stat-number">95%</div>
            <div className="stat-label">Return Patients</div>
          </div>
        </div>

        <div className="testimonials-cta">
          <h3>Ready to Join Our Happy Patients?</h3>
          <p>Experience the same exceptional care that our patients rave about</p>
          <button className="btn">Book Your Appointment Today</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
