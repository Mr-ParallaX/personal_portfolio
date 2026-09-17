import React from 'react';
import { Laptop, FileText, Megaphone, Presentation, Code2, TrendingUp } from 'lucide-react';

const SERVICES = [
  {
    icon: Laptop,
    title: 'Portfolio Website Development',
    description:
      'I create modern and professional portfolio websites for individuals, students, and businesses to showcase their skills, projects, and achievements online.'
  },
  {
    icon: FileText,
    title: 'Creative Resume Design',
    description:
      'I design clean, modern, and professional resumes that stand out and highlight your skills, experience, and achievements effectively.'
  },
  {
    icon: Megaphone,
    title: 'Advertisement & Branding Design',
    description:
      'I create attractive advertisement templates, restaurant ads, posters, and professional business card designs tailored to your brand.'
  },
  {
    icon: Presentation,
    title: 'Modern Presentation Design',
    description:
      'I design high-quality PowerPoint presentations with modern layouts, clear visuals, and professional styling.'
  },
  {
    icon: Code2,
    title: 'Frontend Web Development',
    description:
      'I design and develop responsive websites and web applications using modern frameworks with clean, user-friendly interfaces.'
  },
  {
    icon: TrendingUp,
    title: 'Content Ideas & Creative Guidance',
    description:
      'I provide creative ideas and guidance for content creation to help improve engagement, storytelling, and online presence.'
  }
];

export default function ServicesSection() {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>

        <div className="row">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div className="service-item padd-15" key={index}>
                <div className="service-item-inner shadow-dark">
                  <div className="icon">
                    <Icon size={32} />
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
