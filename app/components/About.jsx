'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import './About.css';

const About = () => {
  return (
    <>
      <h1 style={{marginTop:"100px"}} className="section-title text-center" id="about">
        About Me
      </h1>

      <section className="about-section container py-4">
        <div className="row align-items-center g-4">
          {/* Image Left */}
          <div className="col-md-5 text-center">
            <Image
              src={assets.kalaipriyanimg}
              alt="Profile"
              width={300}
              height={300}
              className="about-image img-fluid"
              priority
            />
          </div>

          {/* Content Right */}
          <div id="content" className="col-md-7">
            <p>
              Passionate Full Stack Developer focused on building modern web applications using the MERN stack.
              Enjoys creating responsive, efficient, and user-friendly interfaces with strong backend support.
            </p>
            <p>
              Always curious about new technologies and eager to explore areas like Web3, cloud services,
              AI integration, and modern DevOps practices. Loves turning ideas into real-world applications and
              continuously learning to improve both frontend and backend skills.
            </p>
            <p>
              Enthusiastic about turning ideas into fully functional products with smooth user experiences, secure
              authentication, and scalable architecture.
            </p>

            {/* Education Box */}
            <div className="education-box d-flex align-items-start rounded shadow-sm">
              <Image
                src={assets.edu_icon}
                alt="Education Icon"
                width={40}
                height={40}
                className="me-3"
              />
              <div>
                <h5 className="mb-1 fw-bold">Education</h5>
                <p className="mb-0 text-muted">Bachelor of Engineering in Computer Science</p>
              </div>
            </div>

            {/* Experience Box */}
            <div className="experience-box d-flex align-items-start rounded shadow-sm">
              <Image
                src={assets.project_icon}
                alt="Experience Icon"
                width={40}
                height={40}
                className="me-3"
              />
              <div>
                <h5 className="mb-1 fw-bold">Experience</h5>
                <p className="mb-0 text-muted">
                  Full Stack Intern at Neowep Software Technology – Built authentication systems, REST APIs, and
                  responsive dashboards using the MERN stack.
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
