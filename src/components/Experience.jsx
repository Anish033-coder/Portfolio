import { experienceData } from '../data/portfolioData';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <p className="section-label">{'// beyond code'}</p>
        <h2 className="section-title">Experience &amp; Activities</h2>

        <div className="experience__timeline">
          {experienceData.map((item, index) => (
            <motion.div
              className={`experience__item${item.current ? ' experience__item--current' : ''}`}
              key={index}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="experience__title">{item.title}</h3>
              <p className="experience__role">{item.role}</p>
              <p className="experience__description">{item.description}</p>
              <span className="experience__period">{item.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
