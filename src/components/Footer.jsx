import React from 'react'

const Footer = () => {
  const quickLinks = [
    ['#home','Home'],['#about','About'],['#services','Services'],['#team','Team'],['#testimonials','Testimonials'],['#contact','Contact']
  ]
  const services = ['General Dentistry','Cosmetic Dentistry','Dental Implants','Orthodontics','Emergency Care','Teeth Whitening']
  const contact = [
    { icon: '📍', label: '123 Dental Care Street, Mumbai 400001' },
    { icon: '📞', label: '+91 22 3456 7890' },
    { icon: '✉️', label: 'info@ambicadental.com' }
  ]
  const socials = ['📘','📷','🐦','💼']
  const stats = [
    ['10K+','Happy Patients'],['15+','Years Experience'],['25+','Expert Staff'],['4.9★','Average Rating']
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 pt-24 mt-24">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      <div className="container relative">
        <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-12 mb-20">
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <span className="tracking-tight">AD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Ambica Dental Care</h3>
                <p className="text-xs text-slate-400">Excellence in modern dentistry</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">We are committed to providing exceptional dental care with a patient-centered approach, modern technology, and a comfortable environment.</p>
            <div className="flex flex-wrap gap-4">
              {['Compassionate Care','Advanced Technology','Patient First'].map(t => (
                <span key={t} className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium tracking-wide backdrop-blur border border-white/10 transition">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              {socials.map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary/20 flex items-center justify-center text-lg transition border border-white/10">{s}</a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-white text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(([href,label]) => (
                <li key={href}><a href={href} className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition" />
                  <span className="group-hover:text-white group-hover:translate-x-1 transition">{label}</span>
                </a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-white text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map(s => (
                <li key={s} className="flex items-center gap-2 group">
                  <span className="text-primary group-hover:rotate-45 transition">▹</span>
                  <span className="group-hover:text-white">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-white text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4 text-sm">
              {contact.map(c => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-lg">{c.icon}</span>
                  <span className="text-slate-400 leading-relaxed">{c.label}</span>
                </li>
              ))}
            </ul>
            <div>
              <p className="text-xs text-slate-500 mb-2">Subscribe for updates</p>
              <form onSubmit={e=>e.preventDefault()} className="flex gap-2 bg-white/5 rounded-xl p-2 backdrop-blur border border-white/10">
                <input type="email" required placeholder="Email address" className="flex-1 bg-transparent placeholder:text-slate-500 text-sm focus:outline-none" />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold shadow hover:shadow-lg transition">Join</button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mb-20">
          {stats.map(([value,label]) => (
            <div key={label} className="relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition" />
              <div className="relative">
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">{value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row gap-6 md:items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ambica Dental Care. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {['Privacy Policy','Terms of Service','Cookies','Accessibility'].map(i => (
              <a key={i} href="#" className="hover:text-white transition">{i}</a>
            ))}
          </div>
          <p className="text-slate-600">Crafted with ❤️ for healthier smiles</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
