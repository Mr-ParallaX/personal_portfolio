import React from 'react';
import { Calendar, MapPin, Code2 } from 'lucide-react';

const CompanyLogo = ({ type, bg }) => {
  if (type === 'magic') {
    return (
      <div className="company-logo" style={{ background: bg }} title="Enlightened Magic">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      </div>
    );
  }
  if (type === 'redkross') {
    return (
      <div className="company-logo" style={{ background: bg }} title="RedKross Research Foundation">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7V2z" />
        </svg>
      </div>
    );
  }
  return (
    <div className="company-logo" style={{ background: bg }} title="Projects">
      <Code2 size={20} color="#ffffff" />
    </div>
  );
};

const SKILLS = [
  { name: 'AI-Tools & Chat-GPT Expert', percent: 96 },
  { name: 'Prompt Engineering', percent: 90 },
  { name: 'Python', percent: 86 },
  { name: 'React & Modern Frontend', percent: 85 },
  { name: 'HTML & Semantic Web', percent: 76 },
  { name: 'CSS & Responsive Design', percent: 68 }
];

const EDUCATION_ITEMS = [
  {
    period: '2024 – 2027',
    title: 'Bachelor of Science in Computer Science (B.Sc CS)',
    institution: 'Mulund College of Commerce (MCC), Mumbai University',
    description:
      'Pursuing a comprehensive program focused on software development, data structures, operating systems, databases, and modern web technologies.'
  },
  {
    period: '2023 – 2024',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'S.M. Shetty College',
    description:
      'Completed higher secondary education with a strong foundation in science and computer-related subjects.'
  },
  {
    period: '2021 – 2022',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Sunrise English High School',
    description:
      'Completed secondary education, building a solid academic base and a growing interest in computer science and technology.'
  }
];

const EXPERIENCE_ITEMS = [
  {
    role: 'Web Developer',
    company: 'Enlightened Magic',
    employmentType: 'Internship',
    period: 'Aug 2026 – Present · 2 mos',
    location: 'Mumbai Metropolitan Region · On-site',
    description: 'Visual Web Developer and Full-Stack Development',
    isCurrent: true,
    logoBg: 'linear-gradient(135deg, #6366f1 0%, #9333ea 100%)',
    logoType: 'magic',
    skills: ['Visual Web Development', 'Full-Stack Development', 'React / Frontend', 'Modern UI/UX']
  },
  {
    role: 'Intern',
    company: 'RedKross Research Foundation',
    employmentType: 'Internship',
    period: 'May 2026 – Aug 2026 · 4 mos',
    location: 'Remote',
    description: 'Research, technology analysis, and collaborative technical initiatives.',
    isCurrent: false,
    logoBg: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
    logoType: 'redkross',
    skills: ['Research & Analysis', 'Software Solutions', 'Remote Collaboration']
  },
  {
    role: 'Frontend Web Developer & Creator',
    company: 'Personal & Freelance Projects',
    employmentType: 'Projects & Practice',
    period: '2024 – Present',
    location: 'Mumbai, India · Hybrid',
    description: 'Developing responsive web applications, Netlify clones, cybersecurity visualizations, and interactive games.',
    isCurrent: true,
    logoBg: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    logoType: 'code',
    skills: ['React', 'JavaScript', 'HTML5 & CSS3', 'Python Game Dev']
  }
];

export default function AboutSection({ onNavigateToContact }) {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Faizan Jamkhandi <span>Computer Science undergraduate</span>
                </h3>
                <p>
                  B.Sc. Computer Science student with a strong interest in software development,
                  cybersecurity, and problem-solving. I work with programming languages like Python,
                  Java, C++, and modern web technologies such as React, JavaScript, HTML, and CSS.
                  I enjoy learning new technologies, practicing coding regularly, and building
                  impactful projects to solve real-world problems. Eager to grow as a developer, gain
                  real-world experience, and contribute to meaningful technology solutions.
                </p>
              </div>
            </div>

            <div className="row">
              {/* Personal Details */}
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Birthday : <span>28 May 2007</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Age : <span>19</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Degree : <span>B.Sc Computer Science</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>City : <span>Mumbai, India</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email : <span>faizanjamkhandi@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Phone : <span>+91 7021901917</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Freelance : <span>Available</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Focus : <span>Web & Cybersecurity</span></p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <button
                      type="button"
                      className="btn hire-me"
                      onClick={onNavigateToContact}
                    >
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="skills padd-15">
                <div className="row">
                  {SKILLS.map((skill) => (
                    <div className="skill-item padd-15" key={skill.name}>
                      <h5>{skill.name}</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{ width: `${skill.percent}%` }}
                        />
                        <div className="skill-percent">{skill.percent}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timelines for Education & Experience */}
            <div className="row">
              {/* Education */}
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {EDUCATION_ITEMS.map((item, idx) => (
                        <div className="timeline-item" key={idx}>
                          <div className="circle-dot" />
                          <h3 className="timeline-date">
                            <Calendar size={14} className="timeline-icon" />
                            <span>{item.period}</span>
                          </h3>
                          <h4 className="timeline-title">{item.title}</h4>
                          <p className="timeline-subtitle">{item.institution}</p>
                          <p className="timeline-text">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {EXPERIENCE_ITEMS.map((item, idx) => (
                        <div className="timeline-item experience-timeline-item" key={idx}>
                          <div className="circle-dot" />
                          <div className="experience-header">
                            <CompanyLogo type={item.logoType} bg={item.logoBg} />
                            <div className="experience-info">
                              <div className="role-title-row">
                                <h4 className="timeline-title">{item.role}</h4>
                                <span className="badge-pill">{item.employmentType}</span>
                                {item.isCurrent && (
                                  <span className="badge-pill badge-current">
                                    <span className="current-dot" />
                                    Present
                                  </span>
                                )}
                              </div>
                              <p className="timeline-company">{item.company}</p>
                              <div className="experience-meta-row">
                                <span className="meta-item">
                                  <Calendar size={13} className="meta-icon" />
                                  <span>{item.period}</span>
                                </span>
                                <span className="meta-item">
                                  <MapPin size={13} className="meta-icon" />
                                  <span>{item.location}</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="exp-desc-box">
                            <Code2 size={16} className="exp-desc-icon" />
                            <span>{item.description}</span>
                          </div>

                          {item.skills && (
                            <div className="exp-skills-row">
                              {item.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="exp-skill-tag">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
