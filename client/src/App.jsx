import { useRef } from 'react'
import './App.css'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function App() {
  const reduceMotion = useReducedMotion()
  const heroRef = useRef(null)
  const presentacionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const { scrollYProgress: presentacionProgress } = useScroll({
    target: presentacionRef,
    offset: ['start end', 'end start'],
  })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.6])
  const videoRadius = useTransform(scrollYProgress, [0, 1], ['0px', '32px'])
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const presentacionOpacity = useTransform(presentacionProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const presentacionBlur = useTransform(presentacionProgress, [0, 0.6], [10, 0])
  const presentacionFilter = useTransform(presentacionBlur, v => `blur(${v}px)`)

  return (
    <>
    <div className="snap-container">
      <section id="hero" ref={heroRef} className="snap-section">
        <motion.div
          className="hero-video-frame"
          style={{
            scale: reduceMotion ? 1 : videoScale,
            borderRadius: reduceMotion ? '0px' : videoRadius,
            opacity: reduceMotion ? 1 : videoOpacity,
          }}
        >
          <video
            className="hero-video"
            src="/videohero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-overlay" />
        </motion.div>
      </section>

      <motion.section
        id="presentacion"
        ref={presentacionRef}
        className="snap-section hero-info"
        initial={reduceMotion ? false : { scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.6, once: false }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        style={{
          opacity: reduceMotion ? 1 : presentacionOpacity,
          filter: reduceMotion ? 'none' : presentacionFilter,
        }}
      >
        <div className="hero-content">
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
        </div>
      </motion.section>
    </div>

    <motion.section
      id="servicios"
      className="services-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <h2>Nuestros servicios</h2>
      <p className="services-sub">
        Todo lo que tu auto necesita, en un solo lugar.
      </p>

      <motion.div
        className="services-grid"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          {
            icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
            iconClass: 'service-icon-accent',
            title: 'Mecánica general',
            desc: 'Mantenimiento, reparación de motor y revisión completa de tu vehículo.',
          },
          {
            icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>,
            iconClass: 'service-icon-accent-2',
            title: 'Electricidad automotriz',
            desc: 'Diagnóstico y reparación de instalaciones eléctricas y baterías.',
          },
          {
            icon: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2"/></>,
            iconClass: 'service-icon-accent',
            title: 'Diagnóstico computarizado',
            desc: 'Escaneo con tecnología de punta para detectar fallas con precisión.',
          },
          {
            icon: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></>,
            iconClass: 'service-icon-accent-2',
            title: 'Frenos y suspensión',
            desc: 'Revisión y cambio de pastillas, discos, amortiguadores y más.',
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            className="service-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } },
            }}
          >
            <div className={`service-icon ${card.iconClass}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {card.icon}
              </svg>
            </div>
            <h3 className="service-title">{card.title}</h3>
            <p className="service-desc">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    <section id="contacto" className="contact-section">
      <h2>¿Hablamos?</h2>
      <p className="contact-sub">
        Escribinos o acercate al taller, te respondemos a la brevedad.
      </p>

      <div className="contact-grid">
        <a href="tel:+5491100000000" className="contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
          </svg>
          +54 9 11 0000-0000
        </a>
        <a href="mailto:contacto@tallerpro.com" className="contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 4h16v16H4z" opacity="0"/>
            <path d="m3 7 9 6 9-6"/>
            <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/>
          </svg>
          contacto@tallerpro.com
        </a>
        <div className="contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Av. Siempre Viva 742, Buenos Aires
        </div>
      </div>
    </section>
    </>
  )
}

export default App
