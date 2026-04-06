import React from 'react'

export default function Topbar({ title, onAlerts }) {
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <header className="topbar">
      <div>
        <div className="page-title">{title}</div>
        <div className="page-sub">{dateStr}</div>
      </div>
      <div className="topbar-right">
        <div className="alert-bell" onClick={onAlerts} title="View Alerts">
          <svg style={{ width: 17, height: 17, display: 'block', color: 'var(--text2)' }}
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15 17H9m4.5-10A4.5 4.5 0 005 11.5V17h14v-5.5A4.5 4.5 0 0014.5 7zM9 17v1a3 3 0 006 0v-1" />
          </svg>
          <div className="bell-dot" />
        </div>
        <div className="avatar" title="Profile">U</div>
      </div>
    </header>
  )
}
