import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    { name:'Sarah Johnson', location:'Mumbai', rating:5, text:'Ambica Dental Hospital transformed my smile completely! The staff is incredibly professional and caring. Dr. Rajesh explained every procedure clearly and made me feel comfortable throughout my treatment. I highly recommend this place!', treatment:'Smile Makeover', image:'👩' },
    { name:'Michael Chen', location:'Delhi', rating:5, text:'I was terrified of dental procedures, but the team at Ambica made the entire experience painless and stress-free. The technology they use is impressive, and the results exceeded my expectations. Thank you for giving me my confidence back!', treatment:'Root Canal & Crown', image:'👨' },
    { name:'Priya Sharma', location:'Pune', rating:5, text:'Taking my kids to Ambica Dental was the best decision. Dr. Sneha is amazing with children - she made my 7-year-old actually excited about dental visits! The child-friendly environment and gentle approach are outstanding.', treatment:'Pediatric Care', image:'👩' },
    { name:'David Wilson', location:'Bangalore', rating:5, text:'After years of avoiding the dentist, I finally found a place I trust. The consultation was thorough, prices were transparent, and the quality of work is exceptional. My dental implants look and feel completely natural!', treatment:'Dental Implants', image:'👨' },
    { name:'Anjali Patel', location:'Chennai', rating:5, text:"The orthodontic treatment I received was life-changing. Dr. Priya guided me through the entire process with patience and expertise. My teeth are perfectly aligned now, and I can't stop smiling!", treatment:'Invisalign Treatment', image:'👩' },
    { name:'Robert Kumar', location:'Hyderabad', rating:5, text:'Emergency dental care at its finest! When I had a severe toothache at midnight, they were available and provided immediate relief. The 24/7 emergency service is a lifesaver. Professional and compassionate team!', treatment:'Emergency Care', image:'👨' }
  ]
  useEffect(() => {
    const timer = setInterval(() => setCurrentTestimonial(p => p === testimonials.length -1 ? 0 : p+1), 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])
  const renderStars = (rating) => Array.from({length:5},(_,i) => <span key={i} className={i < rating ? 'text-yellow-400' : 'text-slate-300'}>⭐</span>)
  const stats = [
    ['😊','98%','Patient Satisfaction'],
    ['⭐','4.9','Average Rating'],
    ['💬','1000+','Positive Reviews'],
    ['🔄','95%','Return Patients']
  ]
  return (
    <section id="testimonials" className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 inline-block relative after:block after:w-16 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">What Our Patients Say</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Real stories from real patients who trust us with their smiles</p>
        </div>
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="flex transition-transform duration-500" style={{ transform:`translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((t,i) => (
                <div key={i} className="min-w-full p-10 md:p-14">
                  <div className="relative bg-white">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl text-white shadow-lg">{t.image}</div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-1">{t.name}</h4>
                          <p className="text-slate-500 text-xs mb-2">{t.location}</p>
                          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{t.treatment}</span>
                        </div>
                      </div>
                      <div className="flex gap-1 self-center md:self-start">{renderStars(t.rating)}</div>
                    </div>
                    <div className="text-center relative">
                      <div className="text-primary/30 text-6xl leading-none font-serif mb-4">“</div>
                      <p className="text-slate-600 italic leading-relaxed max-w-3xl mx-auto">{t.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Controls */}
          <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-4 pointer-events-none">
            <button onClick={() => setCurrentTestimonial(p => p === 0 ? testimonials.length -1 : p-1)} className="pointer-events-auto w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white transition font-bold">←</button>
            <button onClick={() => setCurrentTestimonial(p => p === testimonials.length -1 ? 0 : p+1)} className="pointer-events-auto w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white transition font-bold">→</button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_,i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-3 h-3 rounded-full transition ${i===currentTestimonial ? 'bg-primary scale-110' : 'bg-slate-300 hover:bg-secondary'}`} />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 bg-white p-10 rounded-3xl shadow mb-16">
          {stats.map(([icon,num,label]) => (
            <div key={label} className="text-center p-4 transition hover:-translate-y-1">
              <div className="text-4xl mb-2">{icon}</div>
              <div className="text-3xl font-extrabold text-primary mb-1 leading-none">{num}</div>
              <div className="text-xs font-medium text-slate-500">{label}</div>
            </div>
          ))}
        </div>
        <div className="text-center bg-white p-12 rounded-3xl shadow">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Join Our Happy Patients?</h3>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">Experience the same exceptional care that our patients rave about</p>
            <button className="btn-gradient px-10">Book Your Appointment Today</button>
        </div>
      </div>
    </section>
  )
}
export default Testimonials
