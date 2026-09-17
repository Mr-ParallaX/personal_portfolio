import React from 'react';
import { Calendar } from 'lucide-react';

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
    period: '2024 – Present',
    title: 'Frontend Web Developer (Projects & Practice)',
    description:
      'Designed and developed responsive websites using modern frontend technologies, React, HTML, CSS, and JavaScript. Focused on clean UI design, structured layouts, component architecture, and improving user experience.'
  },
  {
    period: '2023 – Present',
    title: 'Creative Designer & Presentation Developer',
    description:
      'Created modern resume designs, advertisement templates, business cards, and professional PowerPoint presentations as part of academic and personal projects.'
  },
  {
    period: '2023 – Present',
    title: 'Computer Science Student & Project Builder',
    description:
      'Actively working on academic and self-directed projects in Python, Java, Data Structures, Operating Systems, and Web Applications to strengthen programming and algorithmic problem-solving.'
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
                        <div className="timeline-item" key={idx}>
                          <div className="circle-dot" />
                          <h3 className="timeline-date">
                            <Calendar size={14} className="timeline-icon" />
                            <span>{item.period}</span>
                          </h3>
                          <h4 className="timeline-title">{item.title}</h4>
                          <p className="timeline-text">{item.description}</p>
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
