import SectionLabel from './SectionLabel';

const STEPS = [
  {
    number: '01',
    title: 'Find a Stash Point',
    text: 'Locate a participating business near you on the StashDash network.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#F84464" strokeWidth="2" />
        <path d="M16 16l4 4" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Book your spot',
    text: 'Reserve a storage slot for the hours you need through the app.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="#F84464" strokeWidth="2" />
        <path d="M8 3v4M16 3v4M4 10h16" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 14l2 2 4-4" stroke="#F84464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Drop your bags',
    text: 'Hand over your luggage and receive a confirmation. Travel light.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="5" y="8" width="14" height="12" rx="2" stroke="#F84464" strokeWidth="2" />
        <path d="M9 8V6a3 3 0 016 0v2" stroke="#F84464" strokeWidth="2" />
        <path d="M12 12v4M10 14h4" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Keep exploring',
    text: 'Enjoy the city hands-free and pick up your bags when you are ready.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F84464" strokeWidth="2" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="#F84464" strokeWidth="2" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-head center reveal">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="section-title">Simple by design.</h2>
          <p className="section-subtitle">
            A future flow that keeps storage quick, transparent and convenient.
          </p>
        </div>

        <div className="steps">
          <div className="steps-line" />
          {STEPS.map((step) => (
            <div className="step reveal" key={step.number}>
              <div className="step-icon">{step.icon}</div>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;