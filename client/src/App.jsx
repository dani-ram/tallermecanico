import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <>
    <Navbar />
    <section id="hero">
      <div className="hero-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
        Taller Mecánico
      </div>

      <h1>Tu auto en las<br />mejores manos</h1>

      <p className="hero-sub">
        Mecánica general, electricidad automotriz y diagnóstico computarizado.
        Más de 15 años de experiencia con atención personalizada.
      </p>

      <div className="hero-actions">
        <a href="tel:+5491100000000" className="btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
          </svg>
          Llamar ahora
        </a>
        <a href="#servicios" className="btn-secondary">
          Ver servicios
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">+15</span>
          <span className="stat-label">Años de experiencia</span>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat">
          <span className="stat-number">+2k</span>
          <span className="stat-label">Clientes satisfechos</span>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Garantía en trabajos</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
