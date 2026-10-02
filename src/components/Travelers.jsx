import SectionLabel from './SectionLabel';

const CARDS = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F84464" strokeWidth="2" />
        <path d="M12 7v5l3 3" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Arrived too early',
    text: 'Hotel check-in is later but you have already reached the city with all your luggage.',
    statement: 'Store your bags and start exploring immediately.',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="#F84464" strokeWidth="2" />
        <path d="M8 3v4M16 3v4M4 10h16" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Checked out',
    text: 'Hotel checkout is over but your train or flight is still hours away.',
    statement: 'Keep your luggage nearby without wasting your day.',
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4 18h16M6 18V8l6-4 6 4v10" stroke="#F84464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18v-4h4v4" stroke="#F84464" strokeWidth="2" />
      </svg>
    ),
    title: 'Between connections',
    text: 'Several hours between trains or flights with nowhere to leave your bags.',
    statement: 'Turn the wait into a mini city adventure.',
  },
];

function Travelers() {
  return (
    <section id="travelers" className="travelers">
      <div className="container">
        <div className="section-head reveal">
          <SectionLabel>For Travelers</SectionLabel>
          <h2 className="section-title">
            Your luggage shouldn't decide your plans.
          </h2>
          <p className="section-subtitle">
            Every traveler has faced these moments. StacknDash is designed to
            remove the burden of bags so you can make the most of your time.
          </p>
        </div>

        <div className="traveler-grid">
          {CARDS.map((card) => (
            <div className="traveler-card reveal" key={card.number}>
              <div className="traveler-card-top">
                <span className="traveler-number">{card.number}</span>
                <div className="traveler-icon">{card.icon}</div>
              </div>
              <h3 className="traveler-title">{card.title}</h3>
              <p className="traveler-text">{card.text}</p>
              <p className="traveler-statement">{card.statement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Travelers;