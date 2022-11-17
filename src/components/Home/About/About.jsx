import React from 'react';
import './About.css';

import sectionImg from '../../../assets/slider/donation-01.png';

const About = () => {
  return (
    <section className="app__about flex__center section__padding">
      <h2 className="section__heading">About Us Payrolls</h2>
     
      <div className="app__about__aboutContent-wrapper flex__justify">
        <div className="app__about__aboutContent-wrapper-left">
          <img src={sectionImg} alt="Donation" className="animatedImg" />
        </div>
        <div className="app__about__aboutContent-wrapper-right">
           <p className="app__about__headingText p__normal">
        SmartPayroll is a online Payroll company for small and medium business employers.
        We have made Payroll easy and our Payroll Angels will help you avoid all your 
        payroll stress and hassles.You will never be overwhelmed by the complexities 
        of Payroll again. 
      </p>
        </div>
      </div>
    </section>
  );
};

export default About;
