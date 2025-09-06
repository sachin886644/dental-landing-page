import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { listAppointments, listGallery, createGalleryItem, deleteGalleryItem, listCases, createCase, deleteCase, getSettings, updateSettings, logout } from './api'

export default function AdminDashboard() {
  const nav = useNavigate()
  const [tab, setTab] = useState('appointments')
  const [appointments, setAppointments] = useState([])
  const [gallery, setGallery] = useState([])
  const [cases, setCases] = useState([])
  const [creating, setCreating] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  // Enhanced upload UI state
  const [galleryForm, setGalleryForm] = useState({ title:'', category:'', file:null, preview:'' })
  const [caseForm, setCaseForm] = useState({ title:'', beforeFile:null, beforePreview:'', afterFile:null, afterPreview:'' })

  const [settingsForm, setSettingsForm] = useState({
    phone:'', email:'', address:'', hours:'', mapUrl:'', socials:{
      facebook:'', instagram:'', twitter:'', youtube:'', tiktok:'', whatsapp:''
    }
  })

  useEffect(() => {
    let active = true
    Promise.all([listAppointments(), listGallery(), listCases(), getSettings()])
      .then(([apps, gal, cas, settings]) => { if (active) { setAppointments(apps); setGallery(gal); setCases(cas); setSettingsForm({
        phone: settings.phone || '',
        email: settings.email || '',
        address: settings.address || '',
        hours: settings.hours || '',
        mapUrl: settings.mapUrl || '',
        socials: {
          facebook: settings.socials?.facebook || '',
          instagram: settings.socials?.instagram || '',
          twitter: settings.socials?.twitter || '',
          youtube: settings.socials?.youtube || '',
          tiktok: settings.socials?.tiktok || '',
          whatsapp: settings.socials?.whatsapp || '',
        }
      }) } })
      .catch(err => { if (active) setError(err.message || 'Failed to load') })
      .finally(() => { if (active) setLoading(false) })
    return () => { active = false }
  }, [])

  async function onLogout() {
    await logout()
    nav('/admin', { replace: true })
  }

  const totalCounts = {
    appointments: appointments.length,
    gallery: gallery.length,
    results: cases.length,
  }

  const statusCounts = appointments.reduce((acc, a) => {
    const s = (a.status || 'PENDING').toString().toUpperCase()
    acc[s] = (acc[s] || 0) + 1
    return acc
  }, {})

  const statusBadge = (s) => {
    const key = (s || 'PENDING').toString().toUpperCase()
    const map = {
      PENDING: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200',
      CONFIRMED: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200',
      COMPLETED: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200',
      CANCELLED: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-200',
    }
    return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${map[key] || map.PENDING}`}>{key}</span>
  }

  // Drop helpers
  const onPickFile = (inputRef) => inputRef.current && inputRef.current.click()
  const buildPreview = (file) => (file ? URL.createObjectURL(file) : '')

  // Gallery handlers
  const galleryInputRef = React.useRef(null)
  const handleGalleryFile = (file) => setGalleryForm(f => ({ ...f, file, preview: buildPreview(file) }))
  const onGalleryDrop = (e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleGalleryFile(f) }
  const onGalleryDragOver = (e) => e.preventDefault()

  // Case handlers
  const beforeInputRef = React.useRef(null)
  const afterInputRef = React.useRef(null)
  const handleBeforeFile = (file) => setCaseForm(f => ({ ...f, beforeFile:file, beforePreview: buildPreview(file) }))
  const handleAfterFile = (file) => setCaseForm(f => ({ ...f, afterFile:file, afterPreview: buildPreview(file) }))
  const onBeforeDrop = (e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleBeforeFile(f) }
  const onAfterDrop = (e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) handleAfterFile(f) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Manage inquiries, gallery, and results</p>
          </div>
          <button onClick={onLogout} className="btn-outline px-4 py-2 rounded-xl">Logout</button>
        </div>

        {/* Tabs */}
    <div className="mb-6">
          <div className="inline-flex rounded-2xl border bg-white/70 backdrop-blur dark:bg-slate-800/60 overflow-hidden">
      {['appointments','gallery','results','settings'].map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 md:px-6 py-2 text-sm font-medium transition ${tab===t ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {t[0].toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass-card rounded-2xl p-4">
            <div className="text-slate-500 text-sm">Appointments</div>
            <div className="text-3xl font-semibold">{totalCounts.appointments}</div>
            <div className="mt-2 flex gap-2 flex-wrap text-xs">
              {Object.entries(statusCounts).map(([k,v]) => (
                <span key={k} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/60">{k}: {v}</span>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-slate-500 text-sm">Gallery</div>
            <div className="text-3xl font-semibold">{totalCounts.gallery}</div>
            <div className="mt-2 text-xs text-slate-500">Uploaded photos</div>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <div className="text-slate-500 text-sm">Results</div>
            <div className="text-3xl font-semibold">{totalCounts.results}</div>
            <div className="mt-2 text-xs text-slate-500">Before / After cases</div>
          </div>
        </div>

        {loading && <div className="glass-card p-4 rounded-xl">Loading…</div>}
        {error && <div className="text-red-600 mb-4">{error}</div>}

        {!loading && !error && tab==='appointments' && (
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100/70 dark:bg-slate-800/60">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Name</th>
                    <th className="text-left px-4 py-3 font-semibold">Email</th>
                    <th className="text-left px-4 py-3 font-semibold">Phone</th>
                    <th className="text-left px-4 py-3 font-semibold">Message</th>
                    <th className="text-left px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a) => (
                    <tr key={a._id} className="border-t border-gray-200/70 dark:border-slate-700/60 hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                      <td className="px-4 py-3 font-medium">{a.name}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{a.email}</td>
                      <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{a.phone}</td>
                      <td className="px-4 py-3 max-w-[360px] truncate text-slate-600 dark:text-slate-300" title={a.message}>{a.message}</td>
                      <td className="px-4 py-3">{statusBadge(a.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!loading && !error && tab==='settings' && (
          <div className="glass-card rounded-2xl p-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={async (e)=>{
              e.preventDefault();
              try {
                setSaving(true)
                const saved = await updateSettings(settingsForm)
                setSettingsForm({
                  phone: saved.phone || '',
                  email: saved.email || '',
                  address: saved.address || '',
                  hours: saved.hours || '',
                  mapUrl: saved.mapUrl || '',
                  socials: {
                    facebook: saved.socials?.facebook || '',
                    instagram: saved.socials?.instagram || '',
                    twitter: saved.socials?.twitter || '',
                    youtube: saved.socials?.youtube || '',
                    tiktok: saved.socials?.tiktok || '',
                    whatsapp: saved.socials?.whatsapp || '',
                  }
                })
              } catch(err){ setError(err.message || 'Save failed') }
              finally { setSaving(false) }
            }}>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input value={settingsForm.phone} onChange={e=>setSettingsForm(f=>({ ...f, phone:e.target.value }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input value={settingsForm.email} onChange={e=>setSettingsForm(f=>({ ...f, email:e.target.value }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Address</label>
                <input value={settingsForm.address} onChange={e=>setSettingsForm(f=>({ ...f, address:e.target.value }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">Hours</label>
                <input value={settingsForm.hours} onChange={e=>setSettingsForm(f=>({ ...f, hours:e.target.value }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div>
                <label className="block text-sm mb-1">Google Map URL</label>
                <input value={settingsForm.mapUrl} onChange={e=>setSettingsForm(f=>({ ...f, mapUrl:e.target.value }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">Facebook</label>
                  <input value={settingsForm.socials.facebook} onChange={e=>setSettingsForm(f=>({ ...f, socials:{ ...f.socials, facebook:e.target.value } }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Instagram</label>
                  <input value={settingsForm.socials.instagram} onChange={e=>setSettingsForm(f=>({ ...f, socials:{ ...f.socials, instagram:e.target.value } }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Twitter</label>
                  <input value={settingsForm.socials.twitter} onChange={e=>setSettingsForm(f=>({ ...f, socials:{ ...f.socials, twitter:e.target.value } }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">YouTube</label>
                  <input value={settingsForm.socials.youtube} onChange={e=>setSettingsForm(f=>({ ...f, socials:{ ...f.socials, youtube:e.target.value } }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">TikTok</label>
                  <input value={settingsForm.socials.tiktok} onChange={e=>setSettingsForm(f=>({ ...f, socials:{ ...f.socials, tiktok:e.target.value } }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block text-sm mb-1">WhatsApp</label>
                  <input value={settingsForm.socials.whatsapp} onChange={e=>setSettingsForm(f=>({ ...f, socials:{ ...f.socials, whatsapp:e.target.value } }))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button disabled={saving} className="btn-gradient px-5 py-2 rounded-xl disabled:opacity-60">{saving? 'Saving…':'Save Settings'}</button>
              </div>
            </form>
          </div>
        )}

        {!loading && !error && tab==='gallery' && (
          <div className="glass-card rounded-2xl p-4">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4" onSubmit={async (e)=>{
              e.preventDefault();
              try {
                setCreating(true)
                const created = await createGalleryItem({ title: galleryForm.title, category: galleryForm.category, imageFile: galleryForm.file })
                setGallery([created, ...gallery])
                setGalleryForm({ title:'', category:'', file:null, preview:'' })
              } catch(err){ setError(err.message || 'Create failed') } finally { setCreating(false) }
            }}>
              <div className="flex-1 w-full">
                <label className="block text-sm mb-1">Title</label>
                <input value={galleryForm.title} onChange={e=>setGalleryForm(f=>({...f, title:e.target.value}))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-sm mb-1">Category</label>
                <input value={galleryForm.category} onChange={e=>setGalleryForm(f=>({...f, category:e.target.value}))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm">Image</label>
                <div onDrop={onGalleryDrop} onDragOver={onGalleryDragOver} className="relative rounded-xl border-2 border-dashed p-4 text-center bg-white/70 dark:bg-slate-800/60">
                  {galleryForm.preview ? (
                    <div className="relative">
                      <img src={galleryForm.preview} alt="preview" className="w-full h-36 object-cover rounded-lg" />
                      <div className="mt-2 flex justify-between text-xs">
                        <button type="button" onClick={()=> setGalleryForm(f=>({...f, file:null, preview:''}))} className="text-rose-600">Clear</button>
                        <button type="button" onClick={()=> onPickFile(galleryInputRef)} className="text-blue-600">Change</button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">
                      Drag & drop image here, or
                      <button type="button" onClick={()=> onPickFile(galleryInputRef)} className="text-blue-600 ml-1">browse</button>
                    </div>
                  )}
                  <input ref={galleryInputRef} type="file" accept="image/*" className="hidden" onChange={e=> handleGalleryFile(e.target.files?.[0])} />
                </div>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <button disabled={creating || !galleryForm.file || !galleryForm.title || !galleryForm.category} className="btn-gradient px-5 py-2 rounded-xl disabled:opacity-60">{creating? 'Uploading…':'Add'}</button>
              </div>
            </form>
            {gallery.length === 0 && (
              <div className="border border-dashed rounded-xl p-8 text-center text-slate-500">No gallery items yet. Upload your first image above.</div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map(g => (
                <div key={g._id} className="group border rounded-xl overflow-hidden bg-white dark:bg-slate-800 relative">
                  <img src={g.imageUrl} alt={g.title || 'Gallery item'} className="w-full h-36 object-cover" />
                  <div className="p-2 flex items-center justify-between text-sm">
                    <div className="truncate mr-2" title={g.title}>{g.title || 'Item'}</div>
                    <button onClick={async()=>{ try{ await deleteGalleryItem(g._id); setGallery(gallery.filter(x=>x._id!==g._id)) }catch(e){ setError(e.message) } }} className="text-rose-600 hover:text-rose-700">Delete</button>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && !error && tab==='results' && (
          <div className="glass-card rounded-2xl p-4">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-4" onSubmit={async (e)=>{
              e.preventDefault();
              try {
                setCreating(true)
                const created = await createCase({ title: caseForm.title, beforeFile: caseForm.beforeFile, afterFile: caseForm.afterFile })
                setCases([created, ...cases])
                setCaseForm({ title:'', beforeFile:null, beforePreview:'', afterFile:null, afterPreview:'' })
              } catch(err){ setError(err.message || 'Create failed') } finally { setCreating(false) }
            }}>
              <div className="flex-1 w-full md:col-span-1">
                <label className="block text-sm mb-1">Title</label>
                <input value={caseForm.title} onChange={e=>setCaseForm(f=>({...f, title:e.target.value}))} className="w-full border rounded-xl px-3 py-2 bg-white dark:bg-slate-800" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm">Before</label>
                <div onDrop={onBeforeDrop} onDragOver={onBeforeDrop} className="relative rounded-xl border-2 border-dashed p-4 text-center bg-white/70 dark:bg-slate-800/60">
                  {caseForm.beforePreview ? (
                    <div className="relative">
                      <img src={caseForm.beforePreview} alt="before" className="w-full h-36 object-cover rounded-lg" />
                      <div className="mt-2 flex justify-between text-xs">
                        <button type="button" onClick={()=> setCaseForm(f=>({...f, beforeFile:null, beforePreview:''}))} className="text-rose-600">Clear</button>
                        <button type="button" onClick={()=> onPickFile(beforeInputRef)} className="text-blue-600">Change</button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">
                      Drag & drop image here, or
                      <button type="button" onClick={()=> onPickFile(beforeInputRef)} className="text-blue-600 ml-1">browse</button>
                    </div>
                  )}
                  <input ref={beforeInputRef} type="file" accept="image/*" className="hidden" onChange={e=> handleBeforeFile(e.target.files?.[0])} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm">After</label>
                <div onDrop={onAfterDrop} onDragOver={onAfterDrop} className="relative rounded-xl border-2 border-dashed p-4 text-center bg-white/70 dark:bg-slate-800/60">
                  {caseForm.afterPreview ? (
                    <div className="relative">
                      <img src={caseForm.afterPreview} alt="after" className="w-full h-36 object-cover rounded-lg" />
                      <div className="mt-2 flex justify-between text-xs">
                        <button type="button" onClick={()=> setCaseForm(f=>({...f, afterFile:null, afterPreview:''}))} className="text-rose-600">Clear</button>
                        <button type="button" onClick={()=> onPickFile(afterInputRef)} className="text-blue-600">Change</button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">
                      Drag & drop image here, or
                      <button type="button" onClick={()=> onPickFile(afterInputRef)} className="text-blue-600 ml-1">browse</button>
                    </div>
                  )}
                  <input ref={afterInputRef} type="file" accept="image/*" className="hidden" onChange={e=> handleAfterFile(e.target.files?.[0])} />
                </div>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <button disabled={creating || !caseForm.title || !caseForm.beforeFile || !caseForm.afterFile} className="btn-gradient px-5 py-2 rounded-xl disabled:opacity-60">{creating? 'Uploading…':'Add'}</button>
              </div>
            </form>
            {cases.length === 0 && (
              <div className="border border-dashed rounded-xl p-8 text-center text-slate-500">No cases yet. Upload your first result above.</div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {cases.map(c => (
                <div key={c._id} className="group border rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative">
                      <img src={c.beforeUrl} alt="Before" className="w-full h-44 object-cover" />
                      <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-slate-900/70 text-white">Before</span>
                    </div>
                    <div className="relative">
                      <img src={c.afterUrl} alt="After" className="w-full h-44 object-cover" />
                      <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-slate-900/70 text-white">After</span>
                    </div>
                  </div>
                  <div className="p-2 flex items-center justify-between text-sm">
                    <div className="truncate mr-2" title={c.title}>{c.title || 'Case'}</div>
                    <button onClick={async()=>{ try{ await deleteCase(c._id); setCases(cases.filter(x=>x._id!==c._id)) }catch(e){ setError(e.message) } }} className="text-rose-600 hover:text-rose-700">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
