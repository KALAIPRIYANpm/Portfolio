'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import './Projects.css';

const projects = [
  {
    title: "Web3 Hospital Management System",
    description:
      "A decentralized hospital platform using Ethereum, React, and IPFS. Features include NFT-based patient records, doctor/admin dashboards, and secure blockchain data storage. IPFS guarantees tamper-proof medical document storage.",
    tech: ['React', 'Node.js', 'Solidity', 'IPFS', 'MongoDB'],
    image: assets.web3,
    link: "https://github.com/KALAIPRIYANpm/Web3-HMS",
  },
  {
    title: "Event Management System",
    description:
      "An automated event management platform built with the MERN stack. Admins can create and manage events, while users can register, log in, and book event slots. Events are dynamically managed based on real-time schedules and user interaction.",
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: assets.emg,
    link: "https://github.com/KALAIPRIYANpm/Authentication"
  },
  {
    title: "Automated Report Generator",
    description:
      "A MERN-based platform for college faculty to input activity details and auto-generate structured reports based on title and mode of action. Simplifies academic documentation and reduces manual workload.",
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JS Pdf'],
    image: assets.report,
    link: "https://github.com/KALAIPRIYANpm/Automated-Report-Generator"
  },
];

const Projects = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section className="projects-section container py-5">
      <h2 className="text-center mb-5 ">Projects</h2>

      {/* Modal for zoomed image */}
      {zoomImage && (
        <div className="zoom-modal" onClick={() => setZoomImage(null)}>
          <div className="zoom-content">
            <Image src={zoomImage} alt="Zoomed" layout="fill" objectFit="contain" />
          </div>
        </div>
      )}

      <div className="row g-4">
        {projects.map((project, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="project-card shadow-sm p-3 rounded h-100">
              <div
                className="zoomable-image mb-3"
                onClick={() => setZoomImage(project.image)}
                style={{ cursor: 'zoom-in' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-img rounded"
                  width={300}
                  height={200}
                />
              </div>
              <h5>{project.title}</h5>
              <p className="text-muted small">{project.description}</p>
              <div className="tech-stack mb-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="badge bg-dark text-white me-1 mb-1">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-dark mt-2"
              >
                <Image
                  src={assets.git}
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="me-2"
                />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
