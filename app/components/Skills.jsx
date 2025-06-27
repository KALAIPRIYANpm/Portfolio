import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import './Services.css'; // Create this CSS file

const skills = [
  { name: 'React', icon: assets.reactimg },
  { name: 'JavaScript', icon: assets.js },
  { name: 'Next.js', icon: assets.nextjs },
  { name: 'Node.js', icon: assets.nodejs },
  { name: 'Java', icon: assets.java },
  { name: 'C', icon: assets.c },
  { name: 'Linux', icon: assets.linux },
  { name: 'Git/GitHub', icon: assets.git },
  { name: 'MongoDB', icon: assets.mongodb },
  { name: 'MySQL', icon: assets.mysqlimg },
//   { name: 'Linux', icon: assets.linux },
//   { name: 'Node.js', icon: assets.nodejs },
//   { name: 'MetaMask', icon: assets.metamask },
  { name: 'AWS', icon: assets.aws },
  { name: 'Bootstrap', icon: assets.bootstrap },
//   { name: 'Next.js', icon: assets.nextjs },
//   { name: 'C', icon: assets.c },
  { name: 'Material UI', icon: assets.mui },

];

const Services = () => {
  return (
    <section className="skills-section container py-5">
      <h2 className="text-center mb-4 magic-title">Skills</h2>
      <div id='img' className="row g-4 justify-content-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3">
            <div className="skill-box shadow-sm">
              <Image src={skill.icon} alt={skill.name} width={50} height={50} className="mb-2" />
              <p className="mb-0">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
