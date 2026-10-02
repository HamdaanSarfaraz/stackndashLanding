function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Coming soon to India</span>
          <h1 className="hero-title">
            Drop your bags.
            <br />
            <span className="hero-accent">Keep exploring.</span>
          </h1>
          <p className="hero-text">
            StacknDash is building a network of convenient luggage-storage
            locations that lets travelers explore cities without carrying their
            bags everywhere.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              I'm a Traveler
            </a>
            <a href="#partners" className="btn btn-secondary">
              Become a Stash Point
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-dot" />
              <span>Stash Point</span>
            </div>
            <div className="hero-luggage">
              <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
                <rect
                  x="14"
                  y="20"
                  width="36"
                  height="30"
                  rx="4"
                  stroke="#292F45"
                  strokeWidth="3"
                />
                <path
                  d="M24 20v-4a4 4 0 014-4h8a4 4 0 014 4v4"
                  stroke="#292F45"
                  strokeWidth="3"
                />
                <path d="M26 26v18M38 26v18" stroke="#F84464" strokeWidth="3" />
              </svg>
            </div>
            <p className="hero-card-title">Bags safely stored</p>
            <p className="hero-card-sub">Near Connaught Place, Delhi</p>
            <div className="hero-card-progress">
              <div className="hero-progress-bar" />
            </div>
          </div>

          <div className="hero-pin">
            <div className="pin-pulse" />
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#F84464">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
          </div>

          <div className="hero-path" />
        </div>
      </div>
    </section>
  );
}

export default Hero;