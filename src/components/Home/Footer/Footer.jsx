import React from 'react';
import './Footer.css';

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaMobileAlt,
  FaAngleRight,
} from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className="app__footer flex__center section__padding">
      <div className="app__footer-conatiner-wrapper flex__center">
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Smart Payrolls</h3>
          <div className="app__footer-container-underline"></div>
          <p className="p__normal">
            Payroll software integrates with other core business systems to ensure that employees
            receive accurate, on-time compensation in the appropriate manner. Employees can
            typically access the software to edit their personal information, payment preferences,
            and other details.
          </p>
          <div className="app__footer-socialIcons-container">
            <span className="footer-socialIcons flex__center">
              <FaFacebookSquare />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaInstagram />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaTwitterSquare />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Services</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Huge Help To Employees</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Corporate Support</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Ease of Use</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">HR Productivity</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Employee Access</p>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Quick links</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Home</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">About Us</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Services</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Blog</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Contact Us</p>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Find us</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <BiCurrentLocation />
            </span>
            <p className="p__normal">Pune Sus</p>
          </div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaMobileAlt />
            </span>
            <p className="p__normal">+91 1234567890</p>
          </div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <GrMail />
            </span>
            <p className="p__normal">yourmail@domain.com</p>
          </div>
        </div>
      </div>
      <div className="empty"></div>
      <p className="copyright__text p__normal">
        2022 &copy; All Rights Reserved Designed and developed by <span>Govinda & Team</span>
      </p>
    </footer>
  );
};

export default Footer;
