import React from 'react'

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 mb-20 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">About Ambica Dental Hospital</h2>
              <p className="text-slate-500 text-lg">Committed to providing exceptional dental care with a personal touch</p>
            </div>
            <div className="space-y-5 mb-10 text-slate-600 leading-relaxed">
              <p>For over 15 years, Ambica Dental Hospital has been at the forefront of dental excellence, providing comprehensive oral health care to our community. We combine advanced dental technology with compassionate care to ensure every patient receives the highest quality treatment in a comfortable environment.</p>
              <p>Our state-of-the-art facility is equipped with the latest dental technology, including digital X-rays, laser dentistry, and advanced sterilization systems. We believe that preventive care is the foundation of good oral health, and we work closely with each patient to develop personalized treatment plans.</p>
            </div>
            <div className="mb-10">
              {/*
                Removed the hardcoded data and used a map function to render the highlights
                This makes the code more concise and easier to maintain
              */}
              {['Modern Facility','Advanced Technology','Patient-Centered Care'].map((title, index) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl hover:bg-slate-50 transition mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full shadow bg-gradient-to-br from-primary to-secondary text-white text-2xl shrink-0">
                    {index === 0 && '🏥'}
                    {index === 1 && '🔬'}
                    {index === 2 && '💝'}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">
                      {title === 'Modern Facility' && 'State-of-the-art equipment and comfortable environment'}
                      {title === 'Advanced Technology' && 'Latest dental innovations for precise and painless treatments'}
                      {title === 'Patient-Centered Care' && 'Personalized treatment plans tailored to your needs'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary">
              <h3 className="font-semibold text-lg text-slate-800 mb-2">Our Mission</h3>
              <p className="italic text-slate-600 leading-relaxed">"To provide exceptional dental care that improves not just smiles, but overall quality of life. We are committed to building lasting relationships with our patients based on trust, respect, and outstanding results."</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="text-6xl animate-pulseSlow">🏥</div>
                  <div className="flex gap-8 justify-center text-3xl opacity-80">
                    <div className="animate-float" style={{ animationDuration:'4s' }}>👥</div>
                    <div className="animate-float" style={{ animationDuration:'5s', animationDelay:'1s' }}>❤️</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-float border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Excellence Award</div>
                    <div className="text-xs text-slate-500">Best Dental Care 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 p-10 bg-slate-50 rounded-2xl">
          {['15+','5000+','4.9','25+'].map((num, index) => (
            <div key={num} className="text-center p-4 hover:-translate-y-1 transition">
              <div className="text-4xl mb-3">
                {index === 0 && '🎯'}
                {index === 1 && '😊'}
                {index === 2 && '⭐'}
                {index === 3 && '🏆'}
              </div>
              <div className="text-3xl font-extrabold text-primary leading-none mb-1">{num}</div>
              <div className="text-xs font-medium text-slate-500">
                {index === 0 && 'Years of Excellence'}
                {index === 1 && 'Satisfied Patients'}
                {index === 2 && 'Average Rating'}
                {index === 3 && 'Awards Won'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
