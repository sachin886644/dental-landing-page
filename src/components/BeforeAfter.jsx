import React, { useState } from 'react'

// Simple before/after comparison slider
const CaseCompare = ({ before, after, title, details }) => {
  const [value, setValue] = useState(50)
  return (
    <div className="relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow">
      <div className="relative w-full h-64 md:h-80">
        <img src={after} alt={title + ' after'} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
          <img src={before} alt={title + ' before'} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${value}%` }}>
          <div className="relative -ml-3 w-6 h-full flex items-center justify-center">
            <div className="w-1 h-full bg-white/80 backdrop-blur rounded" />
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-1">
              <span className="w-8 h-8 rounded-full bg-white text-primary shadow flex items-center justify-center text-xs font-bold">←</span>
              <span className="w-8 h-8 rounded-full bg-white text-primary shadow flex items-center justify-center text-xs font-bold">→</span>
            </div>
          </div>
        </div>
        <input aria-label="Comparison slider" type="range" min="0" max="100" value={value} onChange={e=>setValue(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize" />
        <div className="absolute top-3 left-3 text-[11px] flex gap-2 font-semibold tracking-wide">
          <span className="px-2 py-1 rounded-full bg-white/80 backdrop-blur text-slate-700">Before</span>
          <span className="px-2 py-1 rounded-full bg-primary text-white shadow">After</span>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <h4 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{details}</p>
      </div>
    </div>
  )
}

const BeforeAfter = () => {
  const cases = [
    {
      title:'Full Smile Makeover',
      before:'https://picsum.photos/seed/before1/900/600',
      after:'https://picsum.photos/seed/after1/900/600',
      details:'Porcelain veneers + whitening. 10 upper teeth treated. Treatment time: 3 visits.'
    },
    {
      title:'Orthodontic Alignment',
      before:'https://picsum.photos/seed/before2/900/600',
      after:'https://picsum.photos/seed/after2/900/600',
      details:'Clear aligners over 12 months for crowding and spacing correction.'
    },
    {
      title:'Implant Restoration',
      before:'https://picsum.photos/seed/before3/900/600',
      after:'https://picsum.photos/seed/after3/900/600',
      details:'Single missing molar replaced with titanium implant and ceramic crown.'
    }
  ]

  return (
    <section id="results" className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 inline-block relative after:block after:w-20 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">Before & After</h2>
          <p className="text-slate-500 max-w-xl mx-auto">See real transformations achieved through our advanced treatments</p>
        </div>
        <div className="grid gap-10 md:gap-12 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {cases.map((c,i) => i===0 ? (
            <div key={c.title} className="md:col-span-2 xl:col-span-1 xl:col-start-1 xl:row-span-2 flex flex-col">
              <CaseCompare before={c.before} after={c.after} title={c.title} details={c.details} />
            </div>
          ) : (
            <div key={c.title} className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow group">
              <div className="grid grid-cols-2 h-48 md:h-56 relative">
                <img src={c.before} alt={c.title + ' before'} className="w-full h-full object-cover" />
                <img src={c.after} alt={c.title + ' after'} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 text-[10px] font-semibold flex gap-1">
                  <span className="px-2 py-1 rounded-full bg-white/80 backdrop-blur text-slate-700">Before</span>
                  <span className="px-2 py-1 rounded-full bg-primary text-white shadow">After</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{c.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{c.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn-gradient px-10">Book Your Transformation</button>
        </div>
      </div>
    </section>
  )
}
export default BeforeAfter
