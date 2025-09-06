import React from 'react'

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
    <section id="services" className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 inline-block relative after:block after:w-16 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">Our Services</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Comprehensive dental care services to meet all your oral health needs</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-20">
          {services.map((service,i) => (
            <div key={i} className="relative group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition overflow-hidden">
              <span className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
              <div className="text-center mb-5">
                <div className="text-5xl mb-4 drop-shadow-sm">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed text-left">{service.description}</p>
              </div>
              <div className="space-y-2 mb-6">
                {service.features.map((f,fi) => (
                  <div key={fi} className="flex items-center gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="font-medium text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <div className="text-center border-t border-slate-200 pt-4">
                <button className="btn-outline text-xs px-6 py-2">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="relative bg-white rounded-3xl p-10 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-5" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left space-y-5">
              <h3 className="text-3xl font-bold text-slate-800">Need a Consultation?</h3>
              <p className="text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">Our expert dentists are ready to provide personalized treatment plans tailored to your specific needs and budget.</p>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <button className="btn-gradient px-8">Book Consultation</button>
                <div className="text-slate-500 text-sm flex items-center gap-2">
                  <span>or call us at</span>
                  <a href="tel:+1234567890" className="text-primary font-semibold">(123) 456-7890</a>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 relative">
              { [
                ['💰','Affordable Plans','Flexible payment options'],
                ['🕒','Emergency Care','24/7 emergency support'],
                ['🛡️','Insurance Accepted','Most insurance plans welcomed']
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-primary/5 hover:bg-primary/10 p-5 rounded-xl transition">
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{title}</div>
                    <div className="text-xs text-slate-500">{desc}</div>
                  </div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
