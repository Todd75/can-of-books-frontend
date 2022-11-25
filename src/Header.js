import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css'

class Header extends React.Component {
  render() {
    return (
      
      <Navbar collapseOnSelect id="entireNavBar">
        {/* <Navbar.Brand id="navHeader">My Favorite Books</Navbar.Brand> */}
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="animate-charcter">A Collection Of Our Favorite Books</h1>
            </div>
          </div>
        </div>
        <NavItem id="navItemAbout"><Link to="/About.js" className="nav-link" id="aboutLink">About Us</Link></NavItem>
        <NavItem id="navItemHome"><Link to="/" className="nav-link" id="homeLink">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
