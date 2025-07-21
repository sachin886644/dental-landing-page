import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your appointment request! We will contact you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    })
  }

  const services = [
    'General Checkup',
    'Teeth Cleaning',
    'Cavity Treatment',
    'Root Canal',
    'Teeth Whitening',
    'Dental Implants',
    'Orthodontics',
    'Cosmetic Dentistry',
    'Emergency Care',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM'
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Schedule your appointment or get in touch with our team
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Get in Touch</h3>
              <p>We're here to help you achieve your perfect smile</p>
            </div>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Visit Our Clinic</h4>
                  <p>123 Dental Care Street<br />Medical Complex, 2nd Floor<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:+912234567890">+91 22 3456 7890</a><br />
                    <a href="tel:+919876543210">+91 98765 43210</a><br />
                    <span className="emergency">Emergency: 24/7 Available</span>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:info@ambicadental.com">info@ambicadental.com</a><br />
                    <a href="mailto:appointments@ambicadental.com">appointments@ambicadental.com</a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-details">
                  <h4>Opening Hours</h4>
                  <div className="hours">
                    <div className="hours-row">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-row">
                      <span>Sunday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">🐦 Twitter</a>
                <a href="#" className="social-link">💼 LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="appointment-form">
            <div className="form-header">
              <h3>Book Your Appointment</h3>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your dental concerns or any specific requirements..."
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="submit-btn btn">
                  Book Appointment
                </button>
                
                <div className="form-note">
                  <p>
                    * Required fields. We'll confirm your appointment within 24 hours.
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-features">
          <div className="feature">
            <div className="feature-icon">🚗</div>
            <div className="feature-content">
              <h4>Free Parking</h4>
              <p>Complimentary parking available for all patients</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-icon">♿</div>
            <div className="feature-content">
              <h4>Wheelchair Accessible</h4>
              <p>Fully accessible facility for patients with mobility needs</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🏥</div>
            <div className="feature-content">
              <h4>Modern Facility</h4>
              <p>State-of-the-art equipment in a comfortable environment</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <div className="feature-content">
              <h4>Insurance Accepted</h4>
              <p>We accept most dental insurance plans</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
