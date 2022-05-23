import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F7FBFC] w-full mt-20">
      <div className="max-w-6xl mx-auto">
        <footer className="footer container mx-auto py-10 px-3 md:px-5 text-base-content">
          <div>
            <img className="w-52" src={logo} alt="" />
            <h3 className="text-xl font-medium">Auto-Part Manufacturer</h3>
            <p>Manufacturing trustworthy products since 1992</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover font-medium">Branding</a>
            <a className="link link-hover font-medium">Design</a>
            <a className="link link-hover font-medium">Marketing</a>
            <a className="link link-hover font-medium">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover font-medium">About us</a>
            <a className="link link-hover font-medium">Contact</a>
            <a className="link link-hover font-medium">Jobs</a>
            <a className="link link-hover font-medium">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover font-medium">Terms of use</a>
            <a className="link link-hover font-medium">Privacy policy</a>
            <a className="link link-hover font-medium">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
