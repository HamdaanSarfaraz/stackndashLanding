import SectionLabel from './SectionLabel';

const BENEFITS = [
  {
    title: 'Potential additional revenue',
    text: 'Businesses may generate additional revenue from suitable unused space.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M12 3v18M8 7h6a3 3 0 010 6H8M8 13h7a3 3 0 010 6H8" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Traveler exposure',
    text: 'Increase your visibility to travelers exploring the area.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#F84464" strokeWidth="2" />
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="#F84464" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Potential customer discovery',
    text: 'A traveler visiting to store luggage may discover the business and potentially return.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9.5" cy="7" r="4" stroke="#F84464" strokeWidth="2" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" stroke="#F84464" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Local visibility',
    text: 'Being part of a traveler-focused network can introduce the establishment to people exploring the area.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M12 21s-7-5.75-7-11a7 7 0 1114 0c0 5.25-7 11-7 11z" stroke="#F84464" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" stroke="#F84464" strokeWidth="2" />
      </svg>
    ),
  },
];

const FLOW = ['Traveler arrives', 'Stores luggage', 'Discovers business', 'Potential future customer'];

function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-head reveal">
          <SectionLabel>For Partners</SectionLabel>
          <h2 className="section-title">Turn your space into a Stash Point.</h2>
          <p className="section-subtitle">
            Hotels, cafés, restaurants, supermarkets, retail stores and other
            suitable establishments can be part of the StashDash network.
          </p>
        </div>

        <div className="partners-layout">
          <div className="partners-benefits">
            {BENEFITS.map((b) => (
              <div className="benefit-card reveal" key={b.title}>
                <div className="benefit-icon">{b.icon}</div>
                <div>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-text">{b.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="partner-flow reveal">
            <h3 className="flow-title">How a Stash Point creates value</h3>
            <div className="flow-steps">
              {FLOW.map((step, i) => (
                <div className="flow-step" key={step}>
                  <div className="flow-marker">
                    <span>{i + 1}</span>
                  </div>
                  <span className="flow-label">{step}</span>
                  {i < FLOW.length - 1 && <div className="flow-connector" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;