import React from 'react';
import CV from '../../assets/Suraj Yadav - Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Suraj_Yadav_Resume.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;