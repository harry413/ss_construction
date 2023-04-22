import React from 'react'

import "./footer.css";
import  logo  from '../../assets/a.jpeg';
const Footer = () => {
  return (
    <div className='ss_footer'>
        <div className='ss_footer-logo'><img src={ logo } alt='logo' /></div>
      <div className='ss_footer-all'>
      <div className='ss_footer-links'>
        <div className="ss_footer-links-div">
          <h4>Links</h4>
          <p>Owners</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="ss_footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="ss_footer-links-div">
          <h4>Get in touch</h4>
          <p>143, Rishi Nagar near shree Ganga ujjain,india</p>
          <p>+91-9589005828</p>
          <p>sachinpatidar413@gmail.com</p>
        </div>
      </div>
      <div className="ss_footer-copyright">
      <p>@2023 ss-construction. All rights reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer