'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const name = "Kalaipriyan";
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < name.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="header-section">
      <div className="container px-3 px-md-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Left Text */}
          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0 header-left">
            <h1 className="fw-bold display-5 mb-3">
              Hi, I'm{' '}
              <span className="highlighted-name">
                {name.split('').map((char, idx) => (
                  <span
                    key={idx}
                    className={`fade-letter ${idx < visibleLetters ? 'visible' : ''}`}
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <p className="lead mb-3">
              A passionate Computer Science Engineering student who loves building meaningful digital experiences.
              I specialize in full-stack development and enjoy turning ideas into user-friendly web applications.
            </p>

            <p className="mb-4">
              Whether it's developing secure systems or diving into AI, I'm constantly learning and evolving.
              Let's build something amazing together!
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-dark btn-lg rounded-pill">
                Contact Me
              </a>
              <a
                href="/cv/Kalaipriyan_CV.pdf"
                download
                className="btn btn-outline-dark btn-lg rounded-pill no-hover"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div className="img-wrapper shadow-lg">
              <Image
                src={assets.kalai1}
                alt="Kalaipriyan"
                width={400}
                height={400}
                className="img-fluid rounded-circle"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
