import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import iconFacebook from '../../assets/images/social-fb.png';
import iconLinkedIn from '../../assets/images/social-linkedin.png';
import iconInstagram from '../../assets/images/social-instagram.png';
import iconYoutube from '../../assets/images/social-youtube.png';
import Separator from './Separator';

const AppHeader = () => {
  return (
    <>
      <Navbar className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Food bubble logo"
          />
        </Navbar.Brand>
        <div class="col-md-4 offset-md-5 header-content">
          <div class="social-icons">
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

          <div class="nav-links">
            <Link to="/">Home</Link> | <Link to="/about">About </Link> |{' '}
            <Link to="/planner">Meal Planner</Link> | <Link to="/search">Search Recipes</Link> |{' '}
            <Link to="/">Plan My Week</Link> | <Link to="/login">Login</Link>
          </div>

          <Form className="header-search">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Separator />
    </>
  );
};

export default AppHeader;
