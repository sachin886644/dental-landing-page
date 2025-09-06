import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', date: '', time: '', message: ''
  })

  const services = [
    'General Checkup','Teeth Cleaning','Cavity Treatment','Root Canal','Teeth Whitening','Dental Implants','Orthodontics','Cosmetic Dentistry','Emergency Care','Other'
  ]
  const timeSlots = [
    '9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM'
  ]

  const scheduleRows = [
    ['Monday - Friday','9:00 AM - 6:00 PM'],
    ['Saturday','9:00 AM - 4:00 PM'],
    ['Sunday','10:00 AM - 2:00 PM']
  ]

  const infoItems = [
    {
      icon: '📍',
      title: 'Visit Our Clinic',
      body: '123 Dental Care Street\nMedical Complex, 2nd Floor\nMumbai, Maharashtra 400001'
    },
    {
      icon: '📞',
      title: 'Call Us',
      body: (
        <span>
          <a href='tel:+912234567890' className='text-primary font-medium block'>+91 22 3456 7890</a>
          <a href='tel:+919876543210' className='text-primary font-medium block'>+91 98765 43210</a>
          <span className='text-red-500 text-xs font-semibold'>Emergency: 24/7 Available</span>
        </span>
      )
    },
    {
      icon: '✉️',
      title: 'Email Us',
      body: (
        <span>
          <a href='mailto:info@ambicadental.com' className='text-primary font-medium block'>info@ambicadental.com</a>
          <a href='mailto:appointments@ambicadental.com' className='text-primary font-medium block'>appointments@ambicadental.com</a>
        </span>
      )
    },
    {
      icon: '🕒',
      title: 'Opening Hours',
      body: (
        <div className='space-y-2 text-xs'>
          {scheduleRows.map(r => (
            <div key={r[0]} className='flex justify-between gap-4 border-b last:border-b-0 border-slate-200 pb-1'>
              <span>{r[0]}</span><span>{r[1]}</span>
            </div>
          ))}
        </div>
      )
    }
  ]

  const featureItems = [
    ['🚗','Free Parking','Complimentary parking available for all patients'],
    ['♿','Wheelchair Accessible','Fully accessible facility for patients with mobility needs'],
    ['🏥','Modern Facility','State-of-the-art equipment in a comfortable environment'],
    ['🛡️','Insurance Accepted','We accept most dental insurance plans']
  ]

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); alert('Thank you for your appointment request! We will contact you soon.'); setFormData({ name:'', email:'', phone:'', service:'', date:'', time:'', message:'' }) }

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 inline-block relative after:block after:w-16 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">Contact Us</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Schedule your appointment or get in touch with our team</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 mb-20 items-start">
          <div className="bg-slate-50 rounded-3xl p-10 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Get in Touch</h3>
              <p className="text-slate-500">We're here to help you achieve your perfect smile</p>
            </div>
            <div className="space-y-6">
              {infoItems.map(item => (
                <div key={item.title} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl shadow">{item.icon}</div>
                  <div className="text-sm leading-relaxed">
                    <h4 className="font-semibold text-slate-800 mb-1 text-base">{item.title}</h4>
                    {typeof item.body === 'string' ? item.body.split('\n').map(line => <p key={line} className='text-slate-500'>{line}</p>) : item.body}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Follow Us</h4>
              <div className="flex flex-wrap gap-3 text-xs">
                {['📘 Facebook','📷 Instagram','🐦 Twitter','💼 LinkedIn'].map(s => (
                  <a key={s} href="#" className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-primary/10 text-slate-600 hover:text-primary transition font-medium">{s}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Book Your Appointment</h3>
              <p className="text-slate-500 text-sm">Fill out the form below and we'll get back to you shortly</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-600">Full Name *</label>
                  <input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-600">Email Address *</label>
                  <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-600">Phone Number *</label>
                  <input id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-semibold text-slate-600">Service Needed</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs font-semibold text-slate-600">Preferred Date</label>
                  <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-xs font-semibold text-slate-600">Preferred Time</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm">
                    <option value="">Select a time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-600">Additional Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your dental concerns or any specific requirements..." className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm resize-y" />
              </div>
              <div className="space-y-4">
                <button type="submit" className="w-full btn-gradient py-4 font-semibold text-sm">Book Appointment</button>
                <p className="text-center text-xs text-slate-500 leading-relaxed">* Required fields. We'll confirm your appointment within 24 hours. For urgent matters, please call us directly.</p>
              </div>
            </form>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 bg-slate-50 p-10 rounded-3xl">
          {featureItems.map(([icon,title,desc]) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition flex flex-col items-center text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="font-semibold text-slate-800 mb-1 text-sm">{title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Contact
