import React from 'react'

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

  // Moved feature metrics & stats objects outside JSX for clarity
  const heroMetrics = {
    '5000+': 'Smiles Transformed',
    '4.9 ⭐': 'Google Rating',
    'FREE': 'Consultation & Scan',
    '0% EMI': 'Starting ₹2,000/Month'
  }

  const statsBar = {
    '15+': 'Years Experience',
    '5000+': 'Happy Patients',
    '98%': 'Success Rate',
    '25+': 'Awards Won'
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 rounded-full bg-accent/10 blur-2xl animate-float" style={{ animationDuration: '7s' }} />
      </div>

      <div className="max-w-screen-xl mx-auto px-5 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-14">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold border border-primary/20">
              <span className="text-lg">🏆</span>
              <span>Trusted Experts in Dental Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-800">
              Transform Your Smile with<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert Dental Care</span>
            </h1>
            <div className="flex flex-wrap gap-8 border-y border-primary/10 py-5">
              {Object.entries(heroMetrics).map(([num, label]) => (
                <div key={num} className="flex flex-col">
                  <span className="text-primary font-extrabold text-xl">{num}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Experience world-class dental treatments with advanced technology, transparent pricing, and flexible payment options. Your perfect smile is just one appointment away!
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-gradient px-7 py-4 font-semibold text-sm shadow-lg">
                <span className="mr-1">📅</span> Book FREE Consultation
              </button>
              <button onClick={scrollToServices} className="btn-outline px-7 py-4 font-semibold text-sm">
                <span className="mr-1">📞</span> Call Now: +91-123-456-7890
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-md">
              {['Advanced Equipment', 'Expert Dentists', 'Painless Treatment', 'Transparent Pricing'].map(f => (
                <div key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700"><span className="text-primary">✅</span><span>{f}</span></div>
              ))}
            </div>
          </div>
          {/* Form */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur shadow-2xl rounded-3xl p-8 border border-primary/10 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800">Get Your FREE Dental Check-up & Scan</h3>
                <p className="text-slate-500 text-sm">Fill the form and book your appointment instantly!</p>
              </div>
              <form className="space-y-4 text-sm">
                <input type="text" placeholder="Full Name*" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <input type="email" placeholder="Email ID*" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <input type="tel" placeholder="Phone Number*" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <select required className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Select City*</option>
                  {['Mumbai', 'Delhi', 'Pune', 'Bangalore', 'Chennai'].map(c => <option key={c} value={c.toLowerCase()}>{c}</option>)}
                </select>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Service Needed</option>
                  {['Braces Treatment', 'Clear Aligners', 'Teeth Whitening', 'Dental Implants', 'Root Canal', 'General Checkup'].map(s => <option key={s} value={s.toLowerCase().replace(/ /g, '-')}>{s}</option>)}
                </select>
                <button type="submit" className="w-full btn-gradient py-4 text-base font-bold">Book Free Consultation & Scan</button>
                <div className="text-center text-xs text-slate-500 space-y-0.5">
                  <p>⚡ Instant booking confirmation</p>
                  <p>🔒 Your data is 100% secure</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Stats Bar */}
        <div className="bg-white/70 backdrop-blur rounded-3xl p-8 border border-slate-200">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
            {Object.entries(statsBar).map(([n, l]) => (
              <div key={n} className="transition hover:-translate-y-1">
                <div className="text-3xl font-extrabold text-primary mb-1">{n}</div>
                <div className="text-xs font-semibold text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
