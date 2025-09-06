import React from 'react'

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
  const benefits = [
    ['🎓','Highly Qualified','All our dentists are highly qualified with advanced degrees and certifications'],
    ['💡','Latest Techniques','Continuous learning and adoption of cutting-edge dental technologies'],
    ['❤️','Patient-Focused','Personalized care with emphasis on comfort and patient satisfaction']
  ]

  return (
    <section id="team" className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 inline-block relative after:block after:w-16 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">Meet Our Expert Team</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Experienced professionals dedicated to providing exceptional dental care</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((m,i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition flex flex-col">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">👨‍⚕️</div>
                  <div className="bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full inline-block">{m.specialization}</div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-center pb-5 mb-5 border-b border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{m.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{m.position}</p>
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">{m.experience}</span>
                </div>
                <div className="mb-5 text-center">
                  <div className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-2 rounded-lg mb-4">Education: <span className="font-normal">{m.education}</span></div>
                  <p className="text-slate-500 text-sm italic leading-relaxed">{m.description}</p>
                </div>
                <div className="mb-5">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-700 mb-2">KEY ACHIEVEMENTS</h4>
                  <ul className="space-y-1">
                    {m.achievements.map((a,ai) => (
                      <li key={ai} className="flex items-center gap-2 text-xs text-slate-500"><span>🏆</span>{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <button className="w-full btn-gradient py-3 text-xs font-semibold">Book Consultation</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 bg-slate-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-12">Why Choose Our Team?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map(([icon,title,desc]) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition flex flex-col items-center text-center">
                <div className="text-5xl mb-5">{icon}</div>
                <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
