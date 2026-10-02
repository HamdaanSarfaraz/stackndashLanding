import SectionLabel from './SectionLabel';

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-content reveal">
          <SectionLabel>About StashDash</SectionLabel>
          <h2 className="section-title">
            We're building a simpler way to experience cities.
          </h2>
          <p className="section-subtitle">
            StashDash is being built as an India-focused luggage-storage
            marketplace. We believe that where you store your bags should never
            limit where your journey takes you.
          </p>
          <div className="about-vision">
            <p className="vision-text">
              "A Stash Point wherever your journey takes you."
            </p>
          </div>
        </div>

        <div className="about-stats reveal">
          <div className="stat-card">
            <span className="stat-value">India</span>
            <span className="stat-label">Focused from day one</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">Travelers</span>
            <span className="stat-label">At the center of our design</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">Local</span>
            <span className="stat-label">Businesses as partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;