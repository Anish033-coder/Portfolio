import { skillsData } from '../data/portfolioData';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SkillCard = ({ category, skills, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <div className="skill-card__category">{category}</div>
      <div className="skill-card__items">
        {skills.map((skill) => (
          <div key={skill} className="skill-card__item">
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills__grid">
          {skillsData.map((group, i) => (
            <SkillCard
              key={group.category}
              category={group.category}
              skills={group.skills}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
