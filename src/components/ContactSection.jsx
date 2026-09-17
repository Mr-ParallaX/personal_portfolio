import React, { useState } from 'react';
import { Phone, MapPin, Mail, Globe, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b4af9ba1-9d97-494d-9408-96df842cbd65',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission from Portfolio',
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          state: 'error',
          message: result.message || 'Something went wrong. Please try again later.'
        });
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not connect to the server. Please try again.'
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <h3 className="contact-title padd-15">Have You Any Question?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>

        {/* Contact Info Items */}
        <div className="row contact-info-row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <Phone size={26} />
            </div>
            <h4>Call Us On</h4>
            <p>
              <a href="tel:+917021901917">+91 7021901917</a>
            </p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <MapPin size={26} />
            </div>
            <h4>Location</h4>
            <p>Mumbai, India</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <Mail size={26} />
            </div>
            <h4>Email</h4>
            <p>
              <a href="mailto:faizanjamkhandi@gmail.com">faizanjamkhandi@gmail.com</a>
            </p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">
              <Globe size={26} />
            </div>
            <h4>Website</h4>
            <p>
              <a href="https://projectcloning.netlify.app/" target="_blank" rel="noreferrer">
                faizanjamkhandi.dev
              </a>
            </p>
          </div>
        </div>

        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">WE WILL RESPOND AS QUICKLY AS POSSIBLE</h4>

        {/* Contact Form */}
        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {status.state !== 'idle' && (
                <div className={`form-status-alert ${status.state}`}>
                  {status.state === 'loading' && <Loader2 size={18} className="spin-icon" />}
                  {status.state === 'success' && <CheckCircle size={18} />}
                  {status.state === 'error' && <AlertCircle size={18} />}
                  <span>{status.message}</span>
                </div>
              )}

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button
                    type="submit"
                    className="btn send-message-btn"
                    disabled={status.state === 'loading'}
                  >
                    <Send size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    {status.state === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
