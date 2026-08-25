import { projectsData } from '../data/portfolioData';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="project-card__header">
        <div>
          <div className="project-card__title">{project.title}</div>
          {project.subtitle && (
            <div className="project-card__subtitle">{project.subtitle}</div>
          )}
        </div>
        <div className="project-card__links">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="Live demo"
            >
              <FiExternalLink />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="GitHub repository"
            >
              <FiGithub />
            </a>
          )}
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="pill">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card__highlights">
        {project.highlights.map((highlight, i) => (
          <div key={i} className="project-card__highlight">
            {highlight}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <div className="projects__list">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
