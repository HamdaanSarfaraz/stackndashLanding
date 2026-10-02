import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Travelers', href: '#travelers' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Stash Points', href: '#stash-points' },
  { label: 'Partners', href: '#partners' },
  { label: 'About', href: '#about' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleClick}>
          <span className="logo-mark">S</span>
          <span className="logo-text">StashDash</span>
        </a>

        <nav className="navbar-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'nav-link active' : 'nav-link'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar-cta">
          Get Early Access
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`} />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={handleClick}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={handleClick}>
          Get Early Access
        </a>
      </div>
    </header>
  );
}

export default Navbar;