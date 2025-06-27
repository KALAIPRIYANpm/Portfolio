'use client';
import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container text-center">
        <p className="connect-text">Connect with me</p>
        <h2 className="main-heading">Get in touch</h2>
        <p className="sub-text">
          I’d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>

        <div className="social-icons d-flex justify-content-center gap-4 mt-4 mb-5">
          <a href="https://github.com/KALAIPRIYANpm" target="_blank">
            <Image src={assets.github} alt="GitHub" width={30} height={30} />
          </a>
          <a href="linkedin.com/in/kalaipriyan-p-4b0584269/" target="_blank">
            <Image src={assets.linkedIn} alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="mailto:kalaipriyan7777@gmail.com">
            <Image src={assets.email3} alt="Email" width={30} height={30} />
          </a>
        </div>

        <form className="contact-form mx-auto">
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control custom-input" placeholder="Enter your name" />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control custom-input" placeholder="Enter your email" />
            </div>
            <div className="col-12">
              <textarea className="form-control custom-textarea" rows="5" placeholder="Enter your message" />
            </div>
            <div className="text-center mt-4">
  <button style={{marginTop:"30px"}} className="btn btn-dark">
    Submit Now
    <Image
      alt="submit"
      src={assets.right_arrow_white}
      width={18}
      height={18}
    />
  </button>
</div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
