import { useState, useEffect } from 'react';
import { cpData } from '../data/portfolioData';
import cpStats from '../data/cpStats.json';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function AnimatedNumber({ value, inView }) {
  const [display, setDisplay] = useState(0);

  const str = String(value);
  const match = str.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span className="cp-card__rating">
      {inView ? display : 0}{suffix}
    </span>
  );
}

function getLiveRating(platformName) {
  if (platformName === 'Codeforces') {
    return cpStats.codeforces?.maxRating ?? null;
  }
  if (platformName === 'CodeChef') {
    return cpStats.codechef?.maxRating ?? null;
  }
  return null;
}

export default function CompetitiveProgramming() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const lastSynced = cpStats.lastUpdated
    ? new Date(cpStats.lastUpdated).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : null;

  return (
    <section id="cp" className="cp" ref={ref}>
      <div className="container">
        <p className="section-label">Competitive Programming</p>
        <h2 className="section-title">Problem Solving</h2>
        <p className="cp__subtitle">{cpData.subtitle}</p>

        <div className="cp__cards">
          {cpData.platforms.map((platform, index) => {
            const liveRating = getLiveRating(platform.name);
            const displayRating = liveRating ?? platform.rating;

            return (
              <motion.div
                className="cp-card"
                key={platform.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className="cp-card__badge">
                  {platform.badge}
                </span>

                {displayRating !== null ? (
                  <AnimatedNumber value={displayRating} inView={inView} />
                ) : (
                  <AnimatedNumber value={platform.badge} inView={inView} />
                )}

                <p className="cp-card__platform">{platform.name}</p>
                <a
                  className="cp-card__handle"
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{platform.handle}
                </a>
              </motion.div>
            );
          })}
        </div>

        {lastSynced && (
          <p className="cp__synced">last synced: {lastSynced}</p>
        )}
      </div>
    </section>
  );
}
