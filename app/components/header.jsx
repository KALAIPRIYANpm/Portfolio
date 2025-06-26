'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <h2 className="text-muted fw-semibold"></h2>
            <h1 className="fw-bold display-4 mb-3">
              Hi, I'm <span className="text-primary">Kalaipriyan</span>
            </h1>
            <p className="lead mb-4">
              A passionate Computer Science Engineering student who loves building meaningful digital experiences.
              I specialize in full-stack development and enjoy turning ideas into user-friendly web applications.
            </p>
            <p className="mb-4">
              Whether it's developing secure systems or diving into AI, I'm constantly learning and evolving.
              Let's build something amazing together!
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-primary btn-lg rounded-pill">
                Contact Me
              </a>
              <a href="/cv/Kalaipriyan_CV.pdf" download className="btn btn-outline-dark btn-lg rounded-pill">
                Download CV
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="border border-2 border-dark rounded-4 overflow-hidden shadow-lg hover-scale d-inline-block">
              <Image
                src={assets.kalai}
                alt="Kalaipriyan"
                width={350}
                height={300}
                className="img-fluid rounded-5"
                style={{ transition: 'transform 0.3s ease-in-out', marginLeft:"-100px",marginTop:"100px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
