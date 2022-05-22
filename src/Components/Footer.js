import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F7FBFC] w-full mt-10">
      <div className="max-w-6xl mx-auto">
        <footer class="footer container mx-auto py-10 px-3 md:px-5 text-base-content">
          <div>
            <img className="w-52" src={logo} alt="" />
            <h3 className="text-xl font-medium">Auto-Part Manufacturer</h3>
            <p>Manufacturing trustworthy products since 1992</p>
          </div>
          <div>
            <span class="footer-title">Services</span>
            <a class="link link-hover font-medium">Branding</a>
            <a class="link link-hover font-medium">Design</a>
            <a class="link link-hover font-medium">Marketing</a>
            <a class="link link-hover font-medium">Advertisement</a>
          </div>
          <div>
            <span class="footer-title">Company</span>
            <a class="link link-hover font-medium">About us</a>
            <a class="link link-hover font-medium">Contact</a>
            <a class="link link-hover font-medium">Jobs</a>
            <a class="link link-hover font-medium">Press kit</a>
          </div>
          <div>
            <span class="footer-title">Legal</span>
            <a class="link link-hover font-medium">Terms of use</a>
            <a class="link link-hover font-medium">Privacy policy</a>
            <a class="link link-hover font-medium">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
