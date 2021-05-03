import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import iconFacebook from '../../assets/images/social-fb.png';
import iconLinkedIn from '../../assets/images/social-linkedin.png';
import iconInstagram from '../../assets/images/social-instagram.png';
import iconYoutube from '../../assets/images/social-youtube.png';
import Separator from './Separator';

const AppFooter = () => {
  return (
    <>
      <Separator />
      <footer>
        <div className="footer-logo col-md-3">
          <div className="footer-logo__image">
            <img src={logo} width="100" height="100" alt="Food bubble logo" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="quick-links row">
            <div className="col-sm-4">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">Meal Planner</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <ul>
                <li>
                  <Link to="/">Recipes</Link>
                </li>
                <li>
                  <Link to="/">Search Recipes</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <ul>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/">Testimonials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="social-icons">
            <Link to="/">
              <img src={iconFacebook} alt="Facebook icon" />
            </Link>
            <Link to="/">
              <img src={iconInstagram} alt="Instagram icon" />
            </Link>
            <Link to="/">
              <img src={iconLinkedIn} alt="LinkedIn icon" />
            </Link>
            <Link to="/">
              <img src={iconYoutube} alt="Youtube icon" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
