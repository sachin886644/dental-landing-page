import React, { useState, useMemo } from 'react'

// NOTE: Replace placeholder image URLs with real clinic images placed in /public or an assets folder.
const Gallery = () => {
  const filters = ['All','Cosmetic','Orthodontics','Implants','Pediatric']
  const items = useMemo(() => ([
    { id:1, category:'Cosmetic', title:'Teeth Whitening', img:'https://picsum.photos/seed/whiten/600/400', desc:'Shade improvement in one session' },
    { id:2, category:'Orthodontics', title:'Clear Aligners', img:'https://picsum.photos/seed/align/600/400', desc:'12 month alignment plan' },
    { id:3, category:'Implants', title:'Single Tooth Implant', img:'https://picsum.photos/seed/implant/600/400', desc:'Titanium implant + crown' },
    { id:4, category:'Cosmetic', title:'Veneers Smile Design', img:'https://picsum.photos/seed/veneers/600/400', desc:'8 upper porcelain veneers' },
    { id:5, category:'Pediatric', title:'Child Cavity Care', img:'https://picsum.photos/seed/pedo/600/400', desc:'Minimally invasive restoration' },
    { id:6, category:'Orthodontics', title:'Braces Transformation', img:'https://picsum.photos/seed/braces/600/400', desc:'18 month fixed braces' },
    { id:7, category:'Implants', title:'Full Arch Implants', img:'https://picsum.photos/seed/fullarch/600/400', desc:'All-on-4 solution' },
    { id:8, category:'Cosmetic', title:'Gum Recontouring', img:'https://picsum.photos/seed/gum/600/400', desc:'Laser aesthetic contour' },
    { id:9, category:'Pediatric', title:'Fluoride Treatment', img:'https://picsum.photos/seed/fluoride/600/400', desc:'Preventive enamel protection' },
  ]),[])

  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter==='All' ? items : items.filter(i=>i.category===filter)

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 inline-block relative after:block after:w-16 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:mt-2">Treatment Gallery</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Real examples of treatments performed by our expert team</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(f => (
            <button key={f} onClick={()=>setFilter(f)} className={`px-5 py-2 rounded-full text-sm font-medium transition border ${filter===f ? 'bg-gradient-to-r from-primary to-secondary text-white border-primary/0 shadow' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-primary/50'}`}>{f}</button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(item => (
            <button key={item.id} onClick={()=>setLightbox(item)} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition">
              <img src={item.img} loading="lazy" alt={item.title} className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-90 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <span className="inline-block text-[10px] font-semibold tracking-wider px-2 py-1 rounded bg-white/20 backdrop-blur text-white mb-2">{item.category}</span>
                <h3 className="text-white font-semibold text-lg leading-tight drop-shadow">{item.title}</h3>
                <p className="text-xs text-white/80 mt-1 line-clamp-2">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button className="btn-outline text-xs">Load More</button>
        </div>
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur" onClick={()=>setLightbox(null)}>
          <div className="relative max-w-4xl w-full" onClick={e=>e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl" />
            <button onClick={()=>setLightbox(null)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 text-slate-700 hover:bg-white shadow flex items-center justify-center font-bold">✕</button>
            <div className="mt-4 bg-white dark:bg-slate-900 rounded-xl p-5 shadow border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{lightbox.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Category: {lightbox.category} — {lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
export default Gallery
