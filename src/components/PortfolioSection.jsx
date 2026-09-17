import React, { useState } from 'react';
import { ExternalLink, Eye, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

const CATEGORIES = [
  'All',
  'Web Development',
  'Cybersecurity',
  'Python & Algorithms',
  'Creative & Animation'
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>Featured Projects & Work :</h2>
            <p className="portfolio-subtext">
              A curated collection of web applications, cybersecurity visualizations, creative frontend interactions, and algorithmic projects.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="row">
          <div className="portfolio-filter-wrapper padd-15">
            <div className="portfolio-filter-tabs">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-tab-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <Layers size={14} style={{ marginRight: '6px' }} />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="row portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="portfolio-item padd-15" key={project.id}>
              <div
                className="portfolio-item-inner shadow-dark"
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-thumbnail"
                  />
                  <div className="portfolio-badge">{project.type}</div>

                  <div className="portfolio-overlay">
                    <button
                      type="button"
                      className="overlay-btn preview-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      title="View Details"
                    >
                      <Eye size={20} />
                      <span>Details</span>
                    </button>

                    {project.hasGithubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn live-btn"
                        onClick={(e) => e.stopPropagation()}
                        title="View on GitHub"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.hasLiveLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn live-btn"
                        onClick={(e) => e.stopPropagation()}
                        title="Open Live Website"
                      >
                        <ExternalLink size={20} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="portfolio-card-info">
                  <h4 className="project-card-title">{project.shortTitle}</h4>
                  <p className="project-card-type">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
