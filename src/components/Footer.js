import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sub">
        <h4>Subscribe to our newsletter</h4>
        <input type="email" placeholder="Enter your email"></input>
        <button className="btn">Subscribe</button>
      </div>
      <div className="social">
        <h4>Follow us on</h4>
        <div className="social-media">
          <TiSocialFacebookCircular />
          <FaInstagramSquare />
          <AiFillTikTok />
          <FaSquareXTwitter />
        </div>
      </div>
      <div>
        <h4>Support</h4>
        <p>FAQS</p>
        <p>Support Centre</p>
        <p>Help Centre</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
