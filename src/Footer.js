import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="" id="footerNav">
        <Navbar.Brand>&copy; Harper Foley & TCW, 2022</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
