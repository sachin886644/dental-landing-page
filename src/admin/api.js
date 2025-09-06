// Minimal API helper for admin auth and resources
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) throw new Error((await res.json()).message || 'Login failed')
  return res.json()
}

export async function me() {
  const res = await fetch(`${API_BASE}/auth/me`, {
    credentials: 'include'
  })
  if (!res.ok) throw new Error('Unauthorized')
  return res.json()
}

export async function logout() {
  await fetch(`${API_BASE}/auth/logout`, { method: 'POST', credentials: 'include' })
}

export async function listAppointments() {
  const res = await fetch(`${API_BASE}/appointments`, { credentials: 'include' })
  if (!res.ok) throw new Error('Failed to load appointments')
  const json = await res.json()
  // API returns { success, data: Appointment[], meta }
  return Array.isArray(json?.data) ? json.data : []
}

// Gallery
export async function listGallery() {
  const res = await fetch(`${API_BASE}/gallery`, { credentials: 'include' })
  if (!res.ok) throw new Error('Failed to load gallery')
  const json = await res.json()
  return Array.isArray(json?.data) ? json.data : []
}

export async function createGalleryItem({ title, category, imageFile }) {
  const fd = new FormData()
  if (title) fd.append('title', title)
  if (category) fd.append('category', category)
  if (imageFile) fd.append('image', imageFile)
  const res = await fetch(`${API_BASE}/gallery`, { method: 'POST', credentials: 'include', body: fd })
  if (!res.ok) throw new Error((await res.json()).message || 'Failed to create gallery item')
  const json = await res.json()
  return json?.data
}

export async function deleteGalleryItem(id) {
  const res = await fetch(`${API_BASE}/gallery/${id}`, { method: 'DELETE', credentials: 'include' })
  if (!res.ok) throw new Error('Failed to delete gallery item')
}

// Before/After Cases
export async function listCases() {
  const res = await fetch(`${API_BASE}/cases`, { credentials: 'include' })
  if (!res.ok) throw new Error('Failed to load cases')
  const json = await res.json()
  return Array.isArray(json?.data) ? json.data : []
}

export async function createCase({ title, beforeFile, afterFile }) {
  const fd = new FormData()
  if (title) fd.append('title', title)
  if (beforeFile) fd.append('before', beforeFile)
  if (afterFile) fd.append('after', afterFile)
  const res = await fetch(`${API_BASE}/cases`, { method: 'POST', credentials: 'include', body: fd })
  if (!res.ok) throw new Error((await res.json()).message || 'Failed to create case')
  const json = await res.json()
  return json?.data
}

export async function deleteCase(id) {
  const res = await fetch(`${API_BASE}/cases/${id}`, { method: 'DELETE', credentials: 'include' })
  if (!res.ok) throw new Error('Failed to delete case')
}

// Settings
export async function getSettings() {
  const res = await fetch(`${API_BASE}/settings`, { credentials: 'include' })
  if (!res.ok) throw new Error('Failed to load settings')
  const json = await res.json()
  return json?.data || {}
}

export async function updateSettings(payload) {
  const res = await fetch(`${API_BASE}/settings`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (!res.ok) throw new Error((await res.json()).message || 'Failed to update settings')
  const json = await res.json()
  return json?.data || {}
}
