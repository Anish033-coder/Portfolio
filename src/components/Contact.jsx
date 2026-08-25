import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FORMSPREE_URL = 'https://formspree.io/f/VITE_FORMSPREE_ID';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data?.errors?.map((e) => e.message).join(', ') || 'Something went wrong');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error — please try again');
      setStatus('error');
    }
  };

  const contactItems = [
    { icon: <FiMail />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone />, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: <FiGithub />, text: 'GitHub', href: personalInfo.github },
    { icon: <FiLinkedin />, text: 'LinkedIn', href: personalInfo.linkedin },
    { icon: <FiMapPin />, text: personalInfo.location, href: null },
  ];

  const buttonLabel = {
    idle: (<><FiSend style={{ marginRight: '0.3rem' }} /> Send Message</>),
    loading: 'Sending...',
    success: (<><FiCheck style={{ marginRight: '0.3rem' }} /> Sent!</>),
    error: (<><FiAlertCircle style={{ marginRight: '0.3rem' }} /> Try Again</>),
  };

  return (
    <>
      <section id="contact" className="contact" ref={ref}>
        <div className="container">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get In Touch</h2>

          <motion.div
            className="contact__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                className="contact__input"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
              <input
                className="contact__input"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
              <textarea
                className="contact__textarea"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className={`btn btn--outline${status === 'success' ? ' btn--success' : ''}${status === 'error' ? ' btn--error' : ''}`}
                disabled={status === 'loading'}
              >
                {buttonLabel[status]}
              </button>
              {status === 'error' && errorMsg && (
                <p className="contact__error">{errorMsg}</p>
              )}
              {status === 'success' && (
                <p className="contact__success">Thanks! I'll get back to you soon.</p>
              )}
            </form>

            <div className="contact__info">
              {contactItems.map((item, i) => {
                const content = (
                  <>
                    {item.icon}
                    <span>{item.text}</span>
                  </>
                );

                return item.href ? (
                  <a
                    key={i}
                    className="contact__item"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className="contact__item">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer__text">Built by Anish Kumawat</p>
          <div className="footer__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <FiMail />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
