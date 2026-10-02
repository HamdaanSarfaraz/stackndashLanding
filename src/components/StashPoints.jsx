import SectionLabel from './SectionLabel';

const NODES = [
  { label: 'Hotels', className: 'node-hotel' },
  { label: 'Cafés', className: 'node-cafe' },
  { label: 'Restaurants', className: 'node-restaurant' },
  { label: 'Stores', className: 'node-store' },
];

function StashPoints() {
  return (
    <section id="stash-points" className="stash-points">
      <div className="container">
        <div className="section-head center reveal">
          <SectionLabel>Stash Points</SectionLabel>
          <h2 className="section-title">
            The places around you become part of your journey.
          </h2>
          <p className="section-subtitle">
            StashnDash intends to connect travelers with participating businesses
            that can provide convenient luggage storage across the city.
          </p>
        </div>

        <div className="network reveal">
          <div className="network-ring ring-1" />
          <div className="network-ring ring-2" />

          <div className="network-center">
            <span className="logo-mark">S</span>
            <span className="network-center-text">StashnDash</span>
          </div>

          {NODES.map((node, i) => (
            <div className={`network-node ${node.className}`} key={node.label} style={{ '--i': i }}>
              <span>{node.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StashPoints;