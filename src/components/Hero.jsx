import { useState, useEffect, useRef } from 'react';
import { personalInfo, heroData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 500;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function useTypingEffect(strings, typingSpeed = 80, deletingSpeed = 40, pauseType = 2000, pauseDelete = 500) {
  const [display, setDisplay] = useState('');
  const state = useRef({ idx: 0, charPos: 0, deleting: false, paused: false });

  useEffect(() => {
    let timer;

    function step() {
      const s = state.current;
      const word = strings[s.idx];

      if (s.paused) return;

      if (!s.deleting) {
        // Typing forward
        s.charPos++;
        setDisplay(word.slice(0, s.charPos));

        if (s.charPos >= word.length) {
          // Finished typing — pause then start deleting
          s.paused = true;
          timer = setTimeout(() => {
            s.paused = false;
            s.deleting = true;
            step();
          }, pauseType);
          return;
        }
        timer = setTimeout(step, typingSpeed);
      } else {
        // Deleting
        s.charPos--;
        setDisplay(word.slice(0, s.charPos));

        if (s.charPos <= 0) {
          // Finished deleting — move to next word, pause, then type
          s.deleting = false;
          s.idx = (s.idx + 1) % strings.length;
          s.paused = true;
          timer = setTimeout(() => {
            s.paused = false;
            step();
          }, pauseDelete);
          return;
        }
        timer = setTimeout(step, deletingSpeed);
      }
    }

    // Initial delay before starting
    timer = setTimeout(step, pauseDelete);

    return () => clearTimeout(timer);
  }, [strings, typingSpeed, deletingSpeed, pauseType, pauseDelete]);

  return display;
}

const Hero = () => {
  const displayText = useTypingEffect(
    heroData.roles,
    TYPING_SPEED,
    DELETING_SPEED,
    PAUSE_AFTER_TYPE,
    PAUSE_AFTER_DELETE
  );

  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__label" variants={fadeUp}>
            Hi, my name is
          </motion.p>

          <motion.h1 className="hero__name" variants={fadeUp}>
            {personalInfo.name}.
          </motion.h1>

          <motion.div className="hero__role" variants={fadeUp}>
            {displayText}
            <span className="cursor" />
          </motion.div>

          <motion.p className="hero__tagline" variants={fadeUp}>
            {heroData.tagline}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#projects" className="btn btn--outline">
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Get in Touch
            </a>
            <a href="/Anish_resume.pdf" download className="btn btn--outline" aria-label="Download Resume">
              <FiDownload style={{ marginRight: '0.3rem' }} /> Resume
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={fadeUp}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
