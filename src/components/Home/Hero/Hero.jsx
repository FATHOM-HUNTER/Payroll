import React from 'react';
import './Hero.css';

import sectionImg from '../../../assets/dashboard/1.png';

const Hero = () => {
  return (
    <header className="app__hero flex__justify section__padding container__bg">
      <div className="app__hero__contentWrapper-left">
        <h1 className="app__hero-headtext">SMART PAYROLL SYSTEM USING BLOCKCHAIN</h1>
        <p style={{ width: '52%' }}>
          Payroll software integrates with other core business systems to ensure that employees
          receive accurate, on-time compensation in the appropriate manner. Employees can typically
          access the software to edit their personal information, payment preferences, and other
          details.
        </p>
        <div className="app__hero__buttonWrapper">
          <button className="custom__button">Contact Us</button>
          <button className="custom__button">Follow Us</button>
        </div>
      </div>
      <div className="app__hero__contentWrapper-right">
        <img src={sectionImg} alt="Donation" className="animatedImg" />
      </div>
    </header>
  );
};

export default Hero;
