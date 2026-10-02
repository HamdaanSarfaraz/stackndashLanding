import { useState } from 'react';
import SectionLabel from './SectionLabel';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'Traveler',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info reveal">
            <SectionLabel>Early Access</SectionLabel>
            <h2 className="section-title">Be part of StacknDash.</h2>
            <p className="section-subtitle">
              We're still building. If you're a traveler, business owner,
              potential partner or simply interested in what we're creating,
              we'd love to hear from you.
            </p>
            <div className="contact-detail">
              <span className="contact-label">Domain</span>
              <span className="contact-value">stashndash.com</span>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            {submitted ? (
              <div className="success-message" role="status">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#F84464" strokeWidth="2" />
                    <path d="M8 12l3 3 5-6" stroke="#F84464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Thank you for your interest.</h3>
                <p>
                  Your enquiry has been recorded on this page. This is a
                  pre-launch demo and no email was actually sent.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role">I am a:</label>
                  <select id="role" name="role" value={form.role} onChange={handleChange}>
                    <option>Traveler</option>
                    <option>Potential Stash Point / Business</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about yourself..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;