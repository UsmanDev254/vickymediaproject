import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assests/Images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-container container">
          <div className="footer-row row text-start">
            {/* Logo and Description */}
            <div className="footer-col col-lg-4 col-md-12 pb-4 pb-md-5 pb-lg-0">
              <div className="footer-content">
                <NavLink to="/">
                  <img
                    src={logo}
                    alt="Vicky Media Logo"
                    className="footer-logo"
                  />
                </NavLink>
                <p className="footer-description my-4">
                  Transforming ideas into digital realities. We deliver
                  innovative solutions in web development, graphic design, and
                  SEO for businesses everywhere.
                </p>
                <div className="footer-icons d-flex align-items-center">
                  <a
                    href="https://facebook.com"
                    className="footer-icon icn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="footer-icon icn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://wa.me/0000000000"
                    className="footer-icon icn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="footer-icon icn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col col-lg-2 col-md-4">
              <div className="footer-content">
                <h3 className="footer-title mb-4">Quick Links</h3>
                <ul className="footer-links m-0 p-0">
                  <li className="footer-link-item my-3">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/service">Services</NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/policy">Privacy &amp; Policy</NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/term">Term &amp; Condition</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Services */}
            <div className="footer-col col-lg-3 col-md-4">
              <div className="footer-content">
                <h3 className="footer-title mb-4">Our Services</h3>
                <ul className="footer-links m-0 p-0">
                  <li className="footer-link-item my-3">
                    <NavLink to="/services/web-development">
                      Website Development
                    </NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/services/logo-design">Logo Design</NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/services/app-development">
                      App Development
                    </NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/services/seo-marketing">
                      SEO Marketing
                    </NavLink>
                  </li>
                  <li className="footer-link-item my-3">
                    <NavLink to="/services/video-animation">
                      Video Animation
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stay In Touch */}
            <div className="footer-col col-lg-3 col-md-4">
              <div className="footer-content">
                <h3 className="footer-title mb-4">Stay In Touch</h3>
                <p className="footer-address">i8 Markaz, Islamabad</p>
                <p className="footer-contact">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="footer-phone-icon"
                    style={{ color: "#0F2942" }}
                  />{" "}
                  <NavLink to={'tel:+92 3087246381'} style={{color: '#4E4E4E'}}>+92 3087246381</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="pre-footer">
        <div className="container py-3">
          <p className="text-center m-0">
            © Copyright 2025 by Usman Malik. All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
