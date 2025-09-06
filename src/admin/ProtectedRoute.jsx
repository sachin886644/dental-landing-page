import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { me } from './api'

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState('loading') // loading | authed | guest

  useEffect(() => {
    let active = true
    me()
      .then(() => active && setStatus('authed'))
      .catch(() => active && setStatus('guest'))
    return () => { active = false }
  }, [])

  if (status === 'loading') return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="glass-card p-6 rounded-2xl">Checking access…</div>
    </div>
  )

  if (status === 'guest') return <Navigate to="/admin" replace />

  return children
}
