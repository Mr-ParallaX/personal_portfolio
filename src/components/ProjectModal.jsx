import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div
        className="portfolio-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={24} />
        </button>

        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} />
          <span className="modal-category-badge">{project.type}</span>
        </div>

        <div className="modal-body">
          <div className="modal-header-row">
            <div>
              <h3 className="modal-title">{project.title}</h3>
              <p className="modal-category">{project.category}</p>
            </div>
            <div className="modal-actions-wrapper">
              {project.hasGithubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn modal-github-btn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Check on GitHub</span>
                </a>
              )}
              {project.hasLiveLink && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn modal-live-btn"
                >
                  <span>Live Project</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="modal-description">
            <h4>Overview</h4>
            <p>{project.description}</p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-highlights">
              <h4>Key Highlights</h4>
              <ul>
                {project.highlights.map((highlight, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} className="highlight-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="modal-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tech-tag">
                  <Tag size={12} style={{ marginRight: '5px' }} />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
