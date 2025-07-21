import React from 'react'
import './Team.css'

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Sharma',
      position: 'Chief Dentist & Founder',
      specialization: 'General & Cosmetic Dentistry',
      experience: '15+ years',
      education: 'BDS, MDS (Oral Medicine)',
      description: 'Passionate about creating beautiful, healthy smiles with personalized care and advanced techniques.',
      achievements: ['Excellence in Dentistry Award 2023', 'Published researcher', '5000+ successful procedures']
    },
    {
      name: 'Dr. Priya Patel',
      position: 'Orthodontist',
      specialization: 'Braces & Aligners',
      experience: '10+ years',
      education: 'BDS, MDS (Orthodontics)',
      description: 'Specialist in creating perfectly aligned smiles using latest orthodontic technologies and techniques.',
      achievements: ['Invisalign Certified', 'Best Orthodontist 2022', '3000+ successful treatments']
    },
    {
      name: 'Dr. Amit Kumar',
      position: 'Oral Surgeon',
      specialization: 'Implants & Surgery',
      experience: '12+ years',
      education: 'BDS, MDS (Oral Surgery)',
      description: 'Expert in complex oral surgeries and dental implants with focus on patient comfort and recovery.',
      achievements: ['Advanced Implant Certification', 'Surgical Excellence Award', '2500+ successful surgeries']
    },
    {
      name: 'Dr. Sneha Verma',
      position: 'Pediatric Dentist',
      specialization: 'Children\'s Dental Care',
      experience: '8+ years',
      education: 'BDS, MDS (Pediatric Dentistry)',
      description: 'Creating positive dental experiences for children with gentle care and child-friendly approaches.',
      achievements: ['Child-Friendly Practice Award', 'Pediatric Care Excellence', '4000+ young patients']
    }
  ]

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Expert Team</h2>
          <p>
            Experienced professionals dedicated to providing exceptional dental care
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card card">
              <div className="team-image">
                <div className="doctor-placeholder">
                  <div className="doctor-icon">👨‍⚕️</div>
                  <div className="specialty-badge">{member.specialization}</div>
                </div>
              </div>

              <div className="team-content">
                <div className="team-header">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <div className="member-experience">
                    <span className="experience-badge">{member.experience}</span>
                  </div>
                </div>

                <div className="member-info">
                  <div className="education">
                    <span className="info-label">Education:</span>
                    <span className="info-value">{member.education}</span>
                  </div>
                  
                  <p className="member-description">{member.description}</p>
                </div>

                <div className="member-achievements">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <span className="achievement-check">🏆</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="team-footer">
                  <button className="consult-btn">Book Consultation</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-cta">
          <div className="team-cta-content">
            <h3>Why Choose Our Team?</h3>
            <div className="team-benefits">
              <div className="benefit">
                <div className="benefit-icon">🎓</div>
                <div className="benefit-text">
                  <h4>Highly Qualified</h4>
                  <p>All our dentists are highly qualified with advanced degrees and certifications</p>
                </div>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">💡</div>
                <div className="benefit-text">
                  <h4>Latest Techniques</h4>
                  <p>Continuous learning and adoption of cutting-edge dental technologies</p>
                </div>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">❤️</div>
                <div className="benefit-text">
                  <h4>Patient-Focused</h4>
                  <p>Personalized care with emphasis on comfort and patient satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
