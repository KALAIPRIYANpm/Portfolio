'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import './About.css';

const About = () => {
  return (
    <>
      <h1 style={{ marginTop: '100px' }} className="section-title text-center" id="about">
        About Me
      </h1>

      <section className="about-section container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-5 col-md-6 text-center">
            <Image
              style={{ borderRadius: '20px' }}
              src={assets.kalaipriyanimg}
              alt="Profile"
              width={320}
              height={320}
              className="about-image img-fluid shadow"
              priority
            />
          </div>

          <div id="content" className="col-lg-7 col-md-6">
            <div className="p-3 rounded-4 shadow-sm" style={{ backgroundColor: '#f9f9f9' }}>
              <p>
                I am a passionate <strong>Full Stack Developer</strong> skilled in building modern and scalable web applications using the <strong>MERN stack</strong>.
                I enjoy creating responsive UIs with efficient backend systems.
              </p>
              <p>
                I'm highly motivated to explore the latest tech trends, including <strong>Web3, AI integration, cloud services (AWS/GCP)</strong>,
                and modern <strong>DevOps</strong> pipelines to improve deployment efficiency and performance.
              </p>
              <p>
                I love turning ideas into reality by developing real-world applications with <strong>secure authentication</strong>, smooth user experience, and
                <strong> modular architecture</strong> that supports scalability.
              </p>
              <p>
                I’m constantly learning and expanding my knowledge in frameworks, databases, APIs, and new technologies. 
                Exploring tools like <strong>Next.js, Prisma, MongoDB, Docker, and Blockchain</strong> is a part of my daily learning routine.
              </p>
              <p>
                In addition to technical work, I’m passionate about <strong>designing intuitive user interfaces</strong>, writing clean code, and working in collaborative environments that value creativity and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 gx-4 gy-4 justify-content-center horizontal-boxes">
          <div className="col-md-5">
            <div className="info-card h-100 shadow-sm p-3 rounded-4">
              <div className="icon-title d-flex align-items-center mb-2">
                <Image
                  src={assets.edu_icon}
                  alt="Education Icon"
                  width={28}
                  height={28}
                  className="me-2"
                />
                <h5 className="fw-bold mb-0 text-dark">Education</h5>
              </div>
              <div className="card-content">
                <h6 className="fw-semibold mb-1">Don Bosco Matriculation Hr. Sec. School</h6>
                <p className="text-muted mb-2">HSC – 80% GPA</p>

                <h6 className="fw-semibold mb-1">Muthayammal Engineering College</h6>
                <p className="text-muted mb-0">B.E Computer Science – 8.88 CGPA</p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="info-card h-100 shadow-sm p-3 rounded-4">
              <div className="icon-title d-flex align-items-center mb-2">
                <Image
                color='black'
                  src={assets.project_icon}
                  alt="Experience Icon"
                  width={28}
                  height={28}
                  className="me-2"
                />
                <h5 style={{color:"black"}} className="fw-bold mb-0 text-dark">Experience</h5>
              </div>
              <div className="card-content">
                <h6 className="fw-semibold mb-1">Neowep Software Technology</h6>
                <p className="text-muted mb-2">
                  Full Stack Intern – Built authentication systems, REST APIs, and dynamic dashboards using the MERN stack.
                </p>
                <p className="text-muted mb-0">
                  Gained experience in developing production-ready modules with real-time database integration and secure login systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
