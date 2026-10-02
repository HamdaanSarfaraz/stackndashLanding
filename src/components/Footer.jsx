const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Travelers', href: '#travelers' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Stash Points', href: '#stash-points' },
  { label: 'Partners', href: '#partners' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="navbar-logo">
            <span className="logo-mark">S</span>
            <span className="logo-text">StashnDash</span>
          </div>
          <p className="footer-tagline">Drop your bags. Keep exploring.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-meta">
          <span>© 2026 StashnDash</span>
          <span>stashndash.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;