import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/cyclex-tools-1.png";

const Footer = () => {
  return (
    <div className="bg-[#F7FBFC] w-full mt-20">
      <div className="max-w-6xl mx-auto">
        <footer className="footer container mx-auto py-10 px-3 md:px-5 text-base-content">
          <div>
            <Link to="/" className="text-left flex items-star">
              <img className="w-16 md:w-20 h-auto" src={logo} alt="" />
              <span className="text-3xl lg:text-4xl font-semibold italic ml-2 pb-2 text-primary">
                Cyclex Tools
              </span>
            </Link>
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
